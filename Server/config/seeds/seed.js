const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '../.env')});
const db = require('../../src/db/conn');
try {
    db.dbConnect();
    require('./SeedRole');
    require('./SeedCategory');
    setTimeout(()=>{
    // eslint-disable-next-line
    console.log('Seeding Complete');
        db.dbDisconnect();
    }, 5000);
} catch (error) {
    // eslint-disable-next-line
  console.log(error);
}
