const db = require("../db/dbConnector");

// Request appending middlware : This will append user's id from patient table into the request object
exports.verifyRegistration = function (req, res) {
  return new Promise(function (resolve, reject) {
    const { id, role } = req.user;
    if (role === "patient") {
      db.oneOrNone(
        "select patient.id from patient,login where login.id=$1 and login.email = patient.email;",
        [id]
      )
        .then((data) => {
          if (data) {
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch((err) => {
          reject(Error(err));
        });
    }
  });
};
