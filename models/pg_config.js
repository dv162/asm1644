const Pool = require("pg").Pool;
const pg_conn = new Pool({
  user: "postgres",
  password: "123",
  host: "localhost",
  database: "asm2",
  port: 5432,
  // ssl: {
  //   rejectUnauthorized: false,
  // },
});
module.exports = pg_conn;

// const { Client } = require("pg");
// const client = new Client({
//   user: "postgres",
//   password: "123",
//   host: "localhost",
//   database: "asm",
//   port: 5432,
// });

// client
//   .connect()
//   .then(() => {
//     console.log("connected");
//   })
//   .catch((error) => {
//     console.error(`Error' ${error}`);
//   });

// module.exports = client;
