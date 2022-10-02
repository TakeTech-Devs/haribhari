const {dbPort} = require('../config/bootstrap');
const app = require('../config/app');
const RemoveUnuseOtp = require('./scheduler/RemoveUnuseOtp');
const port = dbPort || 3001;

RemoveUnuseOtp.otpCron;
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server is run: ${port}`);
});
