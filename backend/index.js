const express = require("express");
require("dotenv").config();
const cors=require("cors");
require("./models/db");




const registerRouter=require("./route/register");
const rolesRouter = require("./route/roles");


const app = express();
app.use(express.json())
//register
app.use("/register", registerRouter);

app.use("/roles",rolesRouter);
////login
//app.use("/login", loginRouter);
////books
//app.use("/books", books);
////rooms
//app.use("/rooms", rooms);

const PORT = 5000;
app.listen(PORT, () => {
  console.log("server is working port is " + PORT);
});
