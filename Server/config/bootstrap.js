const {cleanEnv, str, port, num, email} = require('envalid');
const path = require('path');
require('dotenv').config({path:
   path.join(__dirname, `/.env.${process.env.NODE_ENV}`)});
const env = cleanEnv(process.env, {
  NODE_ENV: str(
      {choices: ['development']}),
  url: str(),
  PORT: port(),
  SALT: num(),
  SECRET_KEY: str(),
  EMAIL: email(),
  PASSWORD: str(),
});

const dbUrl = env.url;
const dbPort = env.PORT;
const salt = env.SALT;
const secretKey = env.SECRET_KEY;
const emailId = env.EMAIL;
const password = env.PASSWORD;

module.exports = {dbUrl, dbPort, salt, secretKey, emailId, password};
