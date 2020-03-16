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
