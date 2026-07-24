const fs=require("fs");

const path="./backups/backup.sql";

if(fs.existsSync(path)){

console.log("Backup Exists");

const stats=fs.statSync(path);

console.log("Size:",stats.size);

}else{

console.log("Backup Missing");

}