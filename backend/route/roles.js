const express = require("express");

 const {createRole,createPermission}=require("../controller/role")

const rolesRouter = express.Router();

rolesRouter.post("/",createRole)
rolesRouter.post("/:role_id/permission",createRole)

module.exports = rolesRouter;
