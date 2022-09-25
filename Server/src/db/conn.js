const mongoose = require('mongoose');
const {dbUrl}= require('../../config/bootstrap');
/**
 * DB Connect
 */
function dbConnect() {
  mongoose.connect(dbUrl, {
    // useCreateIndex:true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify:false,
  }).then(()=>{
    console.log('Connection Successfully');
  }).catch((e)=>{
    console.log('connection error');
  });
}

/**
 * DB Disconnect
 */
function dbDisconnect() {
  mongoose.disconnect();
}

module.exports = {dbConnect, dbDisconnect};

