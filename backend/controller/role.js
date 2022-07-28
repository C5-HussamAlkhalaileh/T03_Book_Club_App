const connection =require("../models/db");

const createRole = (req, res) => {
  const { role } = req.body;

  const query = "INSERT INTO ROLES (role) VALUES(?)";
  const data = [role];

  conneection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success:false,
        message :"server error",
        err :err,
      });

    }
    
    res.status(201).json({
      success: true,
      result: result,
    });
  });
};

module.exports = {
  createRole,
};
