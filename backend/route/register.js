const express = require("express");

 const {register}=require('../controller/register')

const registerRouter = express.Router();

registerRouter.post("/:role_id", register);

module.exports = registerRouter;
