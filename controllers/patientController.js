const db = require("../db/dbConnector");

// Inserts new patient account information into database.
exports.newAccount = function (req, res) {
  const { fname, lname, dob, num, cnic, gender, bloodGroup } = req.body;
  const email = req.user.email;
  db.task((t) => {
    return t.none(
      "insert into patient (email,cnic,f_name,l_name,dob, blood, gender, phone_num) values ($1,$2,$3,$4,$5,$6,$7,$8);",
      [email, cnic, fname, lname, dob, bloodGroup, gender, num]
    );
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

// Gets the patient's profile information from the database.
exports.getProfile = function (req, res) {
  const id = req.user.tid;
  db.one(
    "select patient.f_name,patient.l_name,patient.cnic,patient.dob,patient.email,patient.gender,patient.blood,patient.phone_num from patient where patient.id = $1;",
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

// Updates patient's profile information with the provided information.
exports.updateProfile = function (req, res) {
  const id = req.user.tid;
  const { fname, lname, num } = req.body;
  db.none(
    "update patient set f_name=$1,l_name=$2,phone_num=$3 where id = $4;",
    [fname, lname, num, id]
  )
    .then(() => {
      res.json({
        status: "ok",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// Gets the records of the patient from the database
exports.getRecords = function (req, res) {
  const id = req.user.tid;
  const { offset } = req.body;
  let response = {};
  db.task((t) => {
    return t
      .one("select count(*) from record where record.pat_id = $1;", [id])
      .then((total) => {
        return t
          .any(
            "select record.id,record.date,doctor.f_name as doc_fname,doctor.l_name as doc_lname from patient,record,doctor where record.pat_id = $1 and doctor.id = record.doc_id and record.pat_id = patient.id order by record.id limit 5 offset $2;",
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

// Gets the information of a single record of the patient from the database
exports.singleRecord = function (req, res) {
  const id = req.user.tid;
  const { rid } = req.body;
  console.log(req.body);
  console.log(rid);
  var result = {};
  db.task((t) => {
    return t
      .oneOrNone(
        "select record.id,record.date,patient.f_name as pat_fname,patient.l_name as pat_lname,patient.dob,patient.gender,doctor.f_name as doc_fname,doctor.l_name as doc_lname,record.prescription,record.observation from patient,doctor,record where record.id = $1 and patient.id = record.pat_id and record.doc_id=doctor.id;",
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
