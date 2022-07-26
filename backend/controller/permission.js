const Connection = require("..controller/")

const createPermission = (req, res) => {
  const { permission } = req.body;

  const query = "INSERT INTO permission (permission) VALUES (?)";

  const data = [permission];
  Connection.query(query, data, (err, result) => {
    if (err) {
        return res.json(err)
    }
    res.status(201).json({

    })
  });
};

const query="INSERT role_permission (role_id,permission_id) VALUES (?,?)"

const data=[role_id,result.insertId];

Connection.query(query,data,(err,result)=>{
    if (err) {
        return res.json({
            err
        });
    }
    res.status(201).json({
        success:true,
        result
    })
})