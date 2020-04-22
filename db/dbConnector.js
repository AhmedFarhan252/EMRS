//Setup pg-promise to use PostgreSQL
const pgp = require("pg-promise")();
var types = pgp.pg.types;
require("dotenv").config();
var moment = require("moment");
var parseDate = function parseDate(val) {
  return val === null ? null : moment(val).format("YYYY-MM-DD");
};
var DATATYPE_DATE = 1082;
types.setTypeParser(DATATYPE_DATE, function (val) {
  return val === null ? null : parseDate(val);
});

const conn = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  max: 50,
};

const db = pgp(conn);

module.exports = db;
