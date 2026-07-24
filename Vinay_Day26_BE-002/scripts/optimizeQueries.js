require("dotenv").config();

const pool=require("../db/db");

async function optimize(){

const query=`
EXPLAIN ANALYZE
SELECT *
FROM employees
WHERE department='IT';
`;

const result=await pool.query(query);

console.table(result.rows);

process.exit();

}

optimize();