const express = require("express");

const { register } = require("../controller/register");

const registerRouter = express.Router();
// post request for register function and get the role
registerRouter.post("/:role_id", register);

module.exports = registerRouter;
