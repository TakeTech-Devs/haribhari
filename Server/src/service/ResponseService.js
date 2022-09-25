const message = require('../../config/constant');

exports.sendSuccessResponse = (res, data) => {
  res.setHeader('Content-Type', 'application/json');
  if (typeof(data)==='string') {
    const response = {success: true, info: {message: data}};
    res.status(message.httpSuccessCode).send(response).end();
  } else {
    res.status(message.httpSuccessCode).send({success: true, info: data}).end();
  }
};
