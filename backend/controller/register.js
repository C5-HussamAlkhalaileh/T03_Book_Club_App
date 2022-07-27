const connection =require("../models/db");

const bcrypt=require("bcrypt");
const saltRounds=10;
const register=async(req,res)=>{
    const{first_name,last_name,email,passUser}=req.body;

    const encryptedPassword=await bcrypt.hash(passUser,saltRounds);

    const query ="INSERT INTO USER (first_name,last_name,email,passwordUser) VALUES (?,?,?,?)"

    const data =[first_name,last_name,email,passwordUser]

    connection.query(query,data,(err,result)=>{

        if(err){
            return res.json(err)
        }
        res.status(201).json({

        })

    })
}

module.exports={
    createUser
}
