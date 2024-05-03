const express = require("express");
const app = express();
const userRouter = require("./routers/userRouter")
app.use("/user",userRouter);
app.get("/",(req,res)=>
{
    res.send("use /user for user");
});
app.listen(3000,()=>console.log("server running"));


