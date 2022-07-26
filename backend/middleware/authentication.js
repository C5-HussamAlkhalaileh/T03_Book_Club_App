const jwt =("jsonwebtoken");

const authentication=(req,res,next)=>{

    const authentication = (req, res, next) => {
        try {
          if (!req.headers.authorization) {
            return res.status(403).json({
              success: false,
              message: `Forbidden`,
            });
          }
        
    }
    
                }}
                const token =req.headers.authentication.spilt(" ").pop();
 
