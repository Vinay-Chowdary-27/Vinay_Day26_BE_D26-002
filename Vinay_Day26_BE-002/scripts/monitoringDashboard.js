require("dotenv").config();

const fs=require("fs");

const pool=require("../db/db");

async function dashboard(){

const employeeCount=await pool.query(
"SELECT COUNT(*) FROM employees"
);

const avgSalary=await pool.query(
"SELECT AVG(salary) FROM employees"
);

const report={

Date:new Date(),

Employees:employeeCount.rows[0].count,

AverageSalary:avgSalary.rows[0].avg

};

fs.writeFileSync(
"./reports/monitoring-report.json",
JSON.stringify(report,null,4)
);

console.log(report);

process.exit();

}

dashboard();