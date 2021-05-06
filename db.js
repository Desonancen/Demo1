const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "luffythebest1",
  host: "localhost",
  port: 5432,
  database: "first_project",
});

module.exports = pool;
