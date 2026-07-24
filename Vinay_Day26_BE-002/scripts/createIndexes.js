require("dotenv").config();

const pool=require("../db/db");

async function createIndex(){

await pool.query(`
CREATE INDEX IF NOT EXISTS idx_department
ON employees(department);
`);

console.log("Index Created");

process.exit();

}

createIndex();