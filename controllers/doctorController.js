const db = require("../db/dbConnector");

//Adds the table id from the patient table into request
exports.addTableId = function (req, res, next) {
  const { id, role } = req.user;
  let tid = -1;
  if (role === "doctor") {
    db.oneOrNone(
      "select doctor.id from doctor,login where login.id=1 and login.email = doctor.email;",
      [id]
    ).then((data) => {
      if (data) {
        tid = data.id;

        const user_data = {
          id: id,
          role: "doctor",
          tid: tid,
        };
        req.user = user_data;
        next();
      } else {
        next();
      }
    });
  }
};

// Returns the doctor's profile information
exports.getProfile = function (req, res) {
  const id = req.user.tid;
  db.one(
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
  const id = req.user.tid;
  const { fname, lname, num } = req.body;
  db.none("update doctor set f_name=$1,l_name=$2,phone_num=$3 where id = $4;", [
    fname,
    lname,
    num,
    id,
  ])
    .then(() => {
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
  const id = req.user.tid;
  const { offset } = req.body;
  let response = {};
  db.task((t) => {
    return t
      .one("select count(*) from record where record.doc_id = $1;", [id])
      .then((total) => {
        return t
          .any(
            "select record.id,record.date,patient.f_name as pat_fname,patient.l_name as pat_lname from patient,record,doctor where record.doc_id = $1 and patient.id = record.pat_id and record.doc_id = doctor.id order by record.id limit 5 offset $2;",
            [id, offset]
          )
          .then((records) => {
            response["total"] = total;
            response["records"] = records;
            res.json({
              status: "ok",
              response: response,
            });
          });
      });
  });
};

// Shows a specific single record's information
exports.singleRecord = function (req, res) {
  const id = req.user.tid;
  const { rid } = req.body;

  var result = {};
  db.task((t) => {
    return t
      .oneOrNone(
        "select record.id,record.date,patient.f_name as pat_fname,patient.l_name as pat_lname,patient.dob,patient.gender,doctor.f_name as doc_fname,doctor.l_name as doc_lname,record.prescription,record.observation,record.private_note from patient,doctor,record where record.id = $1 and patient.id = record.pat_id and record.doc_id=doctor.id;",
        [rid]
      )
      .then((data) => {
        if (data) {
          return t
            .any(
              "select record_to_disease.disease from record_to_disease where record_to_disease.record_id = $1;",
              [data.id]
            )
            .then((diseases) => {
              result["data"] = data;
              result["diseases"] = diseases;
            });
        }
      });
  })
    .then(() => {
      res.json({
        status: "ok",
        res: result,
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
  const id = req.user.tid;
  const { offset } = req.body;
  let response = {};
  db.task((t) => {
    return t.one("select count(*) from patient;").then((total) => {
      return t
        .any(
          "select patient.id,patient.cnic,patient.f_name as pat_fname,patient.l_name as pat_lname,patient.phone_num as num,patient.email from patient order by patient.id limit 5 offset $1;",
          [offset]
        )
        .then((records) => {
          response["total"] = total;
          response["records"] = records;
          res.json({
            status: "ok",
            response: response,
          });
        });
    });
  });
};

//Gets the information to automatically fill basic details of a new record i.e. the doctor's name and patient's basic info. Also, returns the list of diseases
exports.getRecordInfo = function (req, res) {
  const doc_id = req.user.tid;
  const { pat_id } = req.body;
  let result = {};
  db.task((t) => {
    return t
      .one(
        "select doctor.f_name as doc_fname,doctor.l_name as doc_lname from doctor where doctor.id = $1; ",
        [doc_id]
      )
      .then((doctorData) => {
        return t
          .one(
            "select patient.f_name as pat_fname,patient.l_name as pat_lname,patient.dob,patient.gender from patient where patient.id = $1;",
            [pat_id]
          )
          .then((patientData) => {
            return t
              .any("SELECT unnest(enum_range(NULL::disease));")
              .then((diseaseList) => {
                result["doc"] = doctorData;
                result["pat"] = patientData;
                result["diseases"] = diseaseList;
              });
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
  const doc_id = req.user.tid;
  let {
    date,
    observation,
    prescription,
    private_note,
    pat_id,
    disease,
  } = req.body;
  // doc_id = parseInt(doc_id);
  // pat_id = parseInt(pat_id);
  // disease = JSON.parse(disease);

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
        })
        .catch((err) => {
          console.log(err);
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
    "select disease, count(disease) from record_to_disease where date > now() - '1 month'::interval group by disease order by count DESC limit 5;"
  )
    .then((data) => {
      res.json({
        status: "ok",
        diseases: data,
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
