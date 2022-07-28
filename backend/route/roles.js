const express = require("express");

 const {createRole}=require('../controller/role')

const rolesRouter = express.Router();

registerRouter.post("/", createRole);

module.exports = rolesRouter;
