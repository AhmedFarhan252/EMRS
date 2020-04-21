const db = require("../db/dbConnector");

exports.getAccount = function (req, res) {
  db.any(
    "select doctor.f_name,doctor.l_name,doctor.email from doctor,login where doctor.email = login.email and login.user_role = 'doctor';"
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

exports.newAccount = function (req, res) {
  const { fname, lname, email, num, cnic } = req.body;
  console.log(req.body);
  db.task((t) => {
    return t
      .none(
        "insert into doctor (cnic,f_name,l_name,email,phone_num) values ($1,$2,$3,$4,$5);",
        [cnic, fname, lname, email, num]
      )
      .then(() => {
        return t.none(
          "insert into login (email,user_role) values ($1,'doctor');",
          [email]
        );
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

exports.delAccount = function (req, res) {
  const email = req.body.email;
  db.none("delete from login where email = $1 and user_role = 'doctor';", [
    email,
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

exports.getDisease = function (req, res) {
  db.any("SELECT enum_range(NULL::disease);")
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

exports.addDisease = function (req, res) {
  const dis_name = req.body.disease;
  db.none("alter type disease add value $1 ;", [dis_name])
    .then(() => {
      res.json({
        status: "ok",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
