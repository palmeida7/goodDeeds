const Pool = require("pg").Pool;
const pool = new Pool({
    user: "TK",
    host: "localhost",
    database: "goodDeeds",
    port: 5432
});
module.exports = pool;


// const Pool = require("pg").Pool;
// const pool = new Pool({
//     user: "Ivan Davis",
//     host: "localhost",
//     database: "goodDeeds",
//     port: 5432
// });
// module.exports = pool;
