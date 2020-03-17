import express, {Application,Request,Response,NextFunction} from 'express';
import mongoose from 'mongoose';
import config from 'config';
const LPort:number = config.get('LPort')||5000;
const app = express();

    // routers
    async  function start(){
        try{
            await mongoose.connect(config.get('MongoURI'),{
                useNewUrlParser:true,
                useUnifiedTopology:true,
                useCreateIndex:true
            });
            app.listen(LPort,()=>console.log(`App has been started on port: ${LPort}`));
        }catch (e) {
            console.log('Server Error',e.message)
            process.exit(1);
        }
    }

app.use('/api/auth', require('./routers/auth.routes'));
start();
/*
// node clear code
const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const app = express();
const LPORT = config.get('LPort') || 5000;
async  function start(){
    try{
         await mongoose.connect(config.get('MongoURI'),{
             useNewUrlParser:true,
             useUnifiedTopology:true,
             useCreateIndex:true
         });
         app.listen(LPORT,()=>console.log(`App has been started on port: ${LPORT}`));
    }catch (e) {
        console.log('Server Error',e.message)
        process.exit(1);
    }
}
start();

 */