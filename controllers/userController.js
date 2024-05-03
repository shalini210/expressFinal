const usermodel = require("../models/userModel")
exports.allUsers=(req,res)=>
{
    console.log("inside controller");
    const users = usermodel.allUsers();
    return users;
}
exports.getUser=(name)=>
{
   
    const users = usermodel.allUsers();
    let objArray = users.filter(x =>x.name=== name);

    return objArray[0];
}