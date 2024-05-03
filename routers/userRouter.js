const express = require("express")
const router = express.Router();
const userController = require("../controllers/userController")
router.get("/",(req,res)=>
{
   
const data = userController.allUsers();
res.send(data);
});
router.get("/hello",(req,res)=>
{
   
const data ="this is sample for hello route of user";
res.send(data);
});
router.get("/:name",(req,res)=>
{
// const data = "welcome"+req.params.name;
const data= userController.getUser(req.params.name)
res.send(data);
});

module.exports = router;