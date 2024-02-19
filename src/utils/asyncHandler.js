const asyncHandler=(fn)=>async(req,res,next)=>{
   try{

   }
   catch(err){
    res.status(err.code||500).json({
        message: err.message
    })
   }
}

