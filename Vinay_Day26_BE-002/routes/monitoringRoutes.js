const express=require("express");

const router=express.Router();

const{
dashboard
}=require("../controllers/monitoringController");

router.get("/",dashboard);

module.exports=router;