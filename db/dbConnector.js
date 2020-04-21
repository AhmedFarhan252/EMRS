//Setup pg-promise to use PostgreSQL
const pgp = require("pg-promise")();
require("dotenv").config();

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

// db.any(
//   `
//   select * from doctor;
// `
// )
//   .then((data) => {
//     data.forEach((r) => {
//       console.log(r);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
