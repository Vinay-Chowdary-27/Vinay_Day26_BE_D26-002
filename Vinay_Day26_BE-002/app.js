require("dotenv").config();

const express=require("express");

const app=express();

const monitoringRoutes=require("./routes/monitoringRoutes");

app.use(express.json());

app.use("/monitor",monitoringRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`Server Running on ${process.env.PORT}`);
});