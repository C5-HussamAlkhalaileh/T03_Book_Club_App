const connection = require("../models/db");

const createRole = (req, res) => {
  const { role } = req.body;

  const query = "INSERT INTO ROLES (role) VALUES(?)";
  const data = [role];

  conneection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "server error",
        err: err,
      });
    }

    res.status(201).json({
      success: true,
      message: "sucess create role",
      result: result,
    });
  });
};

const createPermission = (req, res) => {
  const { permission } = req.body;
  const role_id = req.params.id;

  const query = "INSERT INTO permissions (permission) VALUES (?)";
  const data = [permission];

  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(500).json({ err });
    }

    if (result) {
      const query =
        "INSERT INTO role_permission(permission_id,role_id) VALUES (?,?)";

      const permission_id = result.insertId;
      const data = [permission_id, role_id];
      connection.query(query, data, (err, result) => {
        if (err) {
          res.status(500).json({ err });
        }
        if (result) {
          res.status(500).json({
            success: true,
            message: "sucess create permision",
            result: result,
          });
        }
      });
    } else {
      res.status(500).json({
        success: false,
        message: "filed create permition",
      });
    }
  });
};

module.exports = {
  createRole, createPermission
};
