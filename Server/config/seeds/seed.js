const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '../.env')});
const db = require('../../src/db/conn');
try {
  db.dbConnect();
  require('./SeedUser');
  require('./SeedRole');
  setTimeout(()=>{
    console.log('Seeding Complete');
    db.dbDisconnect();
  }, 5000);
} catch (error) {
  console.log(error);
}
