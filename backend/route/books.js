const express = require("express");

 const {createBooks}=require("../controller/books")

const createBooksRouter = express.Router();

createBooksRouter.post("/", createBooks);

module.exports = createBooksRouter;
