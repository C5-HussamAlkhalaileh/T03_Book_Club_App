const connection = require("../models/db");

const bcrypt = require("bcrypt");
const saltRounds = 10;
const register = async (req, res) => {
  const role_id = req.params.role_id;
  const { firstname, lastname, email, password } = req.body;

  const encryptedPassword = await bcrypt.hash(password, saltRounds);

  const query =
    "INSERT INTO USERS (firstname,lastname,email,password,role_id) VALUES (?,?,?,?,?)";

  const data = [firstname, lastname, email, encryptedPassword,role_id];

  connection.query(query, data, (err, result) => {
    if (err) {
        console.log("test test ");
        console.log(result.data);
      return res.json(err);
      
    }
    res.status(201).json({
      success: true,
      result: result,
      
    });
     
  });
};

module.exports = {
  register,
};
