const router = require("express").Router();
const userController = require("../controllers/userControllers")
const userValidation = require("../validation/userValidation")

//return  all user
router.post('/allUser', (req,res)=>{
    return userController.allUser(req,res)
})



module.exports =router