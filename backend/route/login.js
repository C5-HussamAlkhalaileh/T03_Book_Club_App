const express=require("express");
const {login}=require("../controller/login");

const loginRouter=express.Router();

// post request for login function 
loginRouter.post("/",login);

module.exports = loginRouter;