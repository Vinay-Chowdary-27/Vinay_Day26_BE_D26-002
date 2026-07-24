const fs=require("fs");

exports.dashboard=(req,res)=>{

const report=JSON.parse(fs.readFileSync("./reports/monitoring-report.json"));

res.json(report);

};