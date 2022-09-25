const {validationResult} = require('express-validator');

exports.validateResult=(req, res, next)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400)
        .json({'status': false, 'errors': {'error': errors.array()[0].msg}});
  }
  next();
};
