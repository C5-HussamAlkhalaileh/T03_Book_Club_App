const express = require("express");
const loginRouter = require("./route/loginRouter");
const Login=require("./route/loginRouter")
require("dotenv").config();
const app = express();

//register
app.use("/register",register)
//login
app.use("/login",loginRouter)
//books
app.use("/books",books)
//rooms
app.use("/rooms",rooms)

const PORT = 5000;
app.listen(PORT, () => {
  console.log("server is working port is " + PORT);
});
