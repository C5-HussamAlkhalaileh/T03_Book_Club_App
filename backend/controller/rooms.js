const connection =require("../models/db");
const createRooms=(req,res)=>{

    const {room_name}=req.body;

    const query="INSERT INTO ROOMS (room_name) VALUES(?)"

    const data=[room_name];

    connection.query(query,data,(err,result)=>{
        if (err) {
            return res.json(err)
        }
    })
}

const deleteRooms=(req,res)=>{

    const {room_name}=req.body;

    const query="DELETE INTO ROOMS (room_name) WHERE (?)"

    const data=[room_name];

    connection.query(query,data,(err,result)=>{
        if (err) {
            return res.json(err)
        }
    })
}


module.exports={
    createRooms,

}