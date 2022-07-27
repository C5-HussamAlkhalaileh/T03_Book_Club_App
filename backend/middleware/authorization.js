const connection = require("../models/db");

const authorization = (string) => {
  return function (req, res, next) {
    const user_id = req.token.user_id;
    const data = [user_id];
    const query = "SELECT * FROM USER WHERE USER.ID=(?)";
  

  connection.query(query, data, (err, result) => {
    if (string >= req.token.role_id) {
      next();
    } else {
      res.status(400).json({
        message: "Unauthorized",
      });
    }
  });
};
};
module.exports = authorization;
