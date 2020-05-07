const db = require("../db/dbConnector");

// Request appending middlware : This will append user's id from patient table into the request object
const verifyRegistration = function (req, res) {
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

//Logs out the user and ends the session
exports.logout = function (req, res) {
  req.logout();
  res.json({
    status: "ok",
  });
};

//Handles user redirect after google authentication is completed
exports.googleRedirect = function (req, res) {
  const role = req.user.role;

  if (role === "patient") {
    verifyRegistration(req, res).then((isRegistered) => {
      if (isRegistered) {
        res.redirect("http://localhost:3000/p/profile");
      } else {
        res.redirect("http://localhost:3000/newprofile");
      }
    });
  } else if (role === "doctor") {
    res.redirect("http://localhost:3000/d/profile");
  } else if (role === "admin") {
    res.redirect("http://localhost:3000/a/doc-accounts");
  } else {
    console.log("ERROR: UNKNOWN ROLE TYPE");
    res.redirect("http://localhost:3000");
  }
};

//Handles user redirect after facebook authentication is completed
exports.facebookRedirect = function (req, res) {
  const role = req.user.role;

  if (role === "patient") {
    verifyRegistration(req, res).then((isRegistered) => {
      if (isRegistered) {
        res.redirect("http://localhost:3000/p/profile");
      } else {
        res.redirect("http://localhost:3000/newprofile");
      }
    });
  } else if (role === "doctor") {
    res.redirect("http://localhost:3000/d/profile");
  } else if (role === "admin") {
    res.redirect("http://localhost:3000/a/doc-accounts");
  } else {
    console.log("ERROR: UNKNOWN ROLE TYPE");
    res.redirect("http://localhost:3000");
  }
};

//Checks if person accessing patient route is authenticated
exports.authPatient = function (req, res) {
  //Check if session is present
  if (!req.user) {
    const ret = {
      hasSession: false,
      isRegistered: false,
    };
    res.json(ret);
    return;
  }

  //Check if the user is a patient
  if (req.user.role !== "patient") {
    const ret = {
      hasSession: false,
      isRegistered: false,
    };
    res.json(ret);
  } else {
    //Check if user is registered
    verifyRegistration(req, res).then((isRegistered) => {
      if (isRegistered) {
        const ret = {
          hasSession: true,
          isRegistered: true,
        };
        res.json(ret);
      } else {
        const ret = {
          hasSession: true,
          isRegistered: false,
        };
        res.json(ret);
      }
    });
  }
};

//Checks if person accessing doctor route is authenticated as doctor
exports.authDoctor = function (req, res) {
  //Check if session is present
  if (!req.user) {
    const ret = {
      hasSession: false,
    };
    res.json(ret);
    return;
  }

  //Check if the user is a doctor
  if (req.user.role !== "doctor") {
    const ret = {
      hasSession: false,
    };
    res.json(ret);
  } else {
    const ret = {
      hasSession: true,
    };
    res.json(ret);
  }
};

//Checks if person accessing admin route is authenticated as admin
exports.authAdmin = function (req, res) {
  //Check if session is present
  if (!req.user) {
    const ret = {
      hasSession: false,
    };
    res.json(ret);
    return;
  }

  //Check if the user is a admin
  if (req.user.role !== "admin") {
    const ret = {
      hasSession: false,
    };
    res.json(ret);
  } else {
    const ret = {
      hasSession: true,
    };
    res.json(ret);
  }
};
