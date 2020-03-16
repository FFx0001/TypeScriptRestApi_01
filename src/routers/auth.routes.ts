import {Router, Request, Response, response} from "express";
const User = require('../models/User');
const router = Router();
// /api/auth/register
router.post('/register',async (req:Request,res:Response)=>{
    try{
     //  const{email,password}=req.body;
        return res.status(200);
    }catch (e) {
        res.status(500).json({message:'Error:Что то пошло не так попробуйте снова.'});
    }
});

// /api/auth/login
router.post('/login',async (req:Request,res:Response)=>{
    try{
        //  const{email,password}=req.body;
        return res.status(200);
    }catch (e) {
        res.status(500).json({message:'Error:Что то пошло не так попробуйте снова.'});
    }
});
module.exports = router;