const errorResponse = require("../utils/errorResponse");

const errorHandler=(err,req,res,next)=>{
    let error={...err};
    error.message=err.message
    if(err.name==='castError'){
        const messge='Resources not found'
        error=new errorResponse(messge,404)
    }
    if(err.code===11000){
        const messgae="Duplicate field value entered"
        error=new errorResponse(messgae,400)
    }
    if(err.name==='ValidationError'){
        const messgae=Object.values(err.errors).map((val)=>val.message)
        error=new errorResponse(messgae,400)
        res.status(error.statusCode||500).json({
            success:false,
            error:error.message||'server Error',
        });
    }
};
module.exports=errorHandler;
