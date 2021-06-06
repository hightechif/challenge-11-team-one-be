const home = (req, res)=>{
    res.status(200).json({
        status:"OK",
        message:"Welcome to cv-programmer API"
    })
}

module.exports = {
    home
}