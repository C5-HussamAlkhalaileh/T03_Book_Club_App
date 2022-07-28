const connection = require("../models/db");

const bcrypt = require("bcrypt");
 
const createBooks = async (req, res) => {
 
  const { book, bookimage} = req.body;

 

  const query =
    "INSERT INTO books (book,bookimage) VALUES (?,?)";

  const data = [book, bookimage];

  connection.query(query, data, (err, result) => {
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
  register,
};
