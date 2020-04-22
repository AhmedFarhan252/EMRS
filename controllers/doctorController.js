const db = require("../db/dbConnector");

// Returns the doctor's profile information
exports.getProfile = function (req, res) {
  const id = req.params.id;
  db.any(
    "select doctor.f_name,doctor.l_name,doctor.email,doctor.cnic,doctor.phone_num from doctor where doctor.id = $1;",
    [id]
  )
    .then((data) => {
      res.json({
        status: "ok",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

//Updates the doctor's information with the provided variables in body
exports.editProfile = function (req, res) {
  const { id, f_name, l_name, email, cnic, phone_num } = req.body;
  db.any(
    "update doctor set cnic=$1 , f_name=$2 , l_name=$3 , email=$4 , phone_num=$5 where id=$6",
    [cnic, f_name, l_name, email, phone_num, id]
  )
    .then((data) => {
      res.json({
        status: "ok",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// Shows all records created by a specific doctor (using id)
exports.getRecords = function (req, res) {
  const id = req.params.id;
  db.any(
    "select record.id,record.date,patient.f_name,patient.l_name,record.r_path from patient,record where record.doc_id = $1 and patient.id = record.pat_id;",
    [id]
  )
    .then((data) => {
      res.json({
        status: "ok",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// Shows a specific single record's information
exports.singleRecord = function (req, res) {
  const { rid } = req.body;
  var result = [];
  db.task((t) => {
    return t
      .one(
        "select record.id,record.date,patient.f_name as pat_fname,patient.l_name as pat_lname,patient.dob,patient.gender,doctor.f_name as doc_fname,doctor.l_name as doc_lname,record.prescription,record.observation,record.private_note from patient,doctor,record where record.id = $1 and patient.id = record.pat_id and record.doc_id=doctor.id;",
        [rid]
      )
      .then((data) => {
        return t
          .any(
            "select record_to_disease.disease from record_to_disease where record_to_disease.record_id = $1;",
            [data.id]
          )
          .then((diseases) => {
            result.push(data);
            result.push(diseases);
          });
      });
  })
    .then(() => {
      res.json({
        status: "ok",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// downloads a specific record
exports.recDown = function (req, res) {
  const id = req.body.id;
  res.send(`Download record ${id}`);
};

// Shows the list of patients registered at the clinic
exports.getPatients = function (req, res) {
  db.any(
    "select patient.id,patient.f_name,patient.l_name,patient.phone_num,patient.email from patient;"
  )
    .then((data) => {
      res.json({
        status: "ok",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

//Gets the information to automatically fill basic details of a new record i.e. the doctor's name and patient's basic info.
exports.getRecordInfo = function (req, res) {
  const { doc_id, pat_id } = req.body;
  let result = [];
  db.task((t) => {
    return t
      .any(
        "select doctor.f_name as doc_fname,doctor.l_name as doc_lname from doctor where doctor.id = $1; ",
        [doc_id]
      )
      .then((data) => {
        return t
          .any(
            "select patient.f_name as pat_fname,patient.l_name as pat_lname,patient.dob,patient.gender from patient where patient.id = $1;",
            [pat_id]
          )
          .then((patient) => {
            result.push(data[0]);
            result.push(patient[0]);
          });
      });
  })
    .then(() => {
      res.json({
        status: "ok",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

//Inserts a new record into the database
exports.createRecord = function (req, res) {
  let {
    date,
    observation,
    prescription,
    private_note,
    doc_id,
    pat_id,
    disease,
  } = req.body;
  doc_id = parseInt(doc_id);
  pat_id = parseInt(pat_id);
  disease = JSON.parse(disease);

  return db
    .task((t) => {
      return t
        .one(
          "insert into record (date,observation,prescription,private_note,doc_id,pat_id) values ($1,$2,$3,$4,$5,$6) returning id;",
          [date, observation, prescription, private_note, doc_id, pat_id]
        )
        .then((query_ret) => {
          const record_id = query_ret["id"];
          let queries = [];
          disease.forEach((element) => {
            queries.push(
              t.none(
                "insert into record_to_disease (record_id,disease,date) values ($1,$2,$3)",
                [record_id, element, date]
              )
            );
          });
          return t.batch(queries);
        });
    })
    .then(() => {
      res.json({
        status: "ok",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

//Returns the disease statistics (count) of the past week
exports.getDiseaseStats = function (req, res) {
  db.any(
    "select disease, count(disease) from record_to_disease where date > now() - '1 week'::interval group by disease order by count DESC limit 5;"
  )
    .then((data) => {
      console.log(data);
      res.json({
        status: "ok",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

//Gets the diease stats for a specified time period e.g last month or year
exports.setDiseaseStat = function (req, res) {
  const time_limit = req.body.time_limit;
  db.any(
    "select disease, count(disease) from record_to_disease where date > now() - $1::interval group by disease order by count DESC limit 5;",
    [time_limit]
  )
    .then((data) => {
      res.json({
        status: "ok",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getTimings = function (req, res) {
  res.send("timings");
};

exports.setVisual = function (req, res) {
  res.send("edit timings");
};
