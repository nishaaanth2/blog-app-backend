const router = require("express").Router();
const userController = require("../controllers/userControllers")
const {loginValidation,createUserValidation} = require("../validation/userValidation")
const {errorMsgFormat,validationFormat} =require("../utils/message_format")

//return  all user
router.get('/allUser', (req,res)=>{

    return userController.allUser(req,res)
})

//login user
router.post('/login', (req,res)=>{
    console.log("req body", req.body)
    let {error} = loginValidation(req.body)
    //console.log(req.body);
    if (error) {
        return res.status(400).send(validationFormat(error, 'User', 400))
    }
    return userController.loginUser(req,res)
})

//create user
router.post('/create', (req,res)=>{
    console.log("req body", req.body)
    let {error} = createUserValidation(req.body)
    //console.log(req.body);
    if (error) {
        return res.status(400).send(validationFormat(error, 'User', 400))
    }
    return userController.createUser(req,res)
})




module.exports =router