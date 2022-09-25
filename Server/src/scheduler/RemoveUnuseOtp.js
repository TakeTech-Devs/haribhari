const cron = require('node-cron');
const moment = require('moment');
const Otp = require('../model/otp');
const logger = require('../utils/logger');

exports.otpCron = cron.schedule('* * * * *', async () => {
  try {
    const previousTime = moment(new Date()).subtract(15, 'days').format('YYYY-MM-DD hh:mm:ss');
    const otp = await Otp.deleteMany({createdAt: {$lte: new Date(new Date(previousTime).toISOString())}});
    if (otp.deletedCount>0) {
      console.log(otp.deletedCount+ ' OTP deleted');
      logger.info(otp.deletedCount+ ' OTP deleted');
    }
  } catch (error) {
    console.log(error);
  }
});
