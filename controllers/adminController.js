const db = require("../db/dbConnector");

db.any(
  `
  select * from doctor;
`
)
  .then((data) => {
    data.forEach((r) => {
      console.log(r);
    });
  })
  .catch((err) => {
    console.log(err);
  });
