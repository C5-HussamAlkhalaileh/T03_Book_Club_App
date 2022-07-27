const conneection = require("../");

const createRole = (req, res) => {
  const { role } = req.body;

  const query = "INSERT INTO ROLES (Role) VALUES(?)";
  const data = [role];

  conneection.query(query, data, (err, result) => {
    if (err) {
      return res.json(err);
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
