const app = require('express')()

exports.allUser = async (req,res) =>{
    console.log("working only");
    const {id} = req.query
    return res.send(
        {
            "data" : "id"
        }
    )
}
exports.loginUser = async (req,res) =>{
    console.log("working only loginUser");
    let x = req.body
    console.log(x);
    return res.send( x
    )
}

exports.createUser = async (req,res) =>{
    console.log("working only createUser");
    let x = req.body
    console.log(x);
    x.sucess=200;
    x.comment= "user created"
    return res.send( x
    )
}