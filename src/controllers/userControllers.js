const app = require('express')()

exports.allUser = async (req,res) =>{
    console.log("working only");
    const {id} = req.query
    return res.send(
        {
            "data" : id
        }
    )
}
exports.createUsers = async (req,res) =>{
    console.log("working only");
    const {id} = req.query
    return res.send(
        {
            "data" : id
        }
    )
}