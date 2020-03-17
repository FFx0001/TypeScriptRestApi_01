import {Router, Request, Response, response} from "express";
const User = require('../models/User');
const router = Router();
// /api/auth/register
router.post('/register',async (req:Request,res:Response)=>{
    try{
     //  const{email,password}=req.body;
        res.send('register!');
        console.log("register");
        return res.status(200);
    }catch (e) {
        res.status(500).json({message:'Error:Что то пошло не так попробуйте снова.'});
    }
});

// /api/auth/login
router.post('/login',async (req:Request,res:Response)=>{
    try{
        //  const{email,password}=req.body;
        res.send('login!');
        console.log("login");
        return res.status(200);
    }catch (e) {
        res.status(500).json({message:'Error:Что то пошло не так попробуйте снова.'});
    }
});

router.get('/get', (request, response) => {
    response.send('Hello world!');
});
module.exports = router;