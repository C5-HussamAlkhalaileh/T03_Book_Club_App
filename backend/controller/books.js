const Connection = require("mysql2/typings/mysql/lib/Connection");


const createBook=(req,res)=>{

    const {book_name,book_url}=req.body;

    const query="INSERT INTO BOOKS (book_name,book_url) VALUES (?,?)" ;
    const data=[book_name,book_url];

    Connection.query(query,data,(err,result)=>{})
}