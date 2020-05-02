var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var passportSetup = require("./config/passportSetup");
var cookieSession = require("cookie-session");
var passport = require("passport");
var cors = require("cors");
require("dotenv").config();

var app = express();

//Add cookie sessions
app.use(
  cookieSession({
    maxAge: 1 * 1000 * 60 * 60,
    keys: [process.env.KEY],
  })
);

//Initialize passport
app.use(passport.initialize());
app.use(passport.session());

//Routes
var patientRouter = require("./routes/patient");
var doctorRouter = require("./routes/doctor");
var adminRouter = require("./routes/admin");
var authRouter = require("./routes/auth");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/auth", authRouter);
app.use("/patient", patientRouter);
app.use("/doctor", doctorRouter);
app.use("/admin", adminRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.status(500).json({
    message: err.message,
    error: err,
  });
});

module.exports = app;
