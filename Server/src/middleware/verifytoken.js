const jwt = require('jsonwebtoken');


const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403)
            .json({'status': false, 'message': 'token is not valid'});
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(401)
        .json({'status': false, 'message': 'You are not authenticated!'});
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user._id === req.params.id || req.user.role_id===1) {
      next();
    } else {
      res.status(403)
          .json({'status': false, 'message': 'You are not alowed to do that!'});
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role_id===1) {
      next();
    } else {
      res.status(403)
          .json({
            'status': false,
            'message': 'You are not alowed to do that!!!!!!',
          });
    }
  });
};


module.exports = {verifyToken, verifyTokenAndAuthorization,
  verifyTokenAndAdmin};
