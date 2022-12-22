const jwt = require('jsonwebtoken');


const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader, "authHeader")
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        console.log(token)

        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) {
                return res.status(403)
                    .json({
                        'success': false,
                        'errors': { 'error': 'token is not valid' },
                    });
            }
            req.user = user;
            next();
        });
    } else {
        return res.status(401)
            .json({
                'success': false,
                'errors': { 'error': 'You are not authenticated' },
            });
    }
};

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user._id === req.params.id || req.user.role === 'admin') {
            next();
        } else {
            res.status(403)
                .json({
                    'success': false,
                    'errors': { 'error': 'You are not alowed to do that' },
                });
        }
    });
};

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.role === 'admin') {
            next();
        } else {
            res.status(403)
                .json({
                    'success': false,
                    'errors': { 'error': 'You are not alowed to do that' },
                });
        }
    });
};

const verifyTokenAndVender = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.role === 'admin' || req.user.role === 'vender') {
            next();
        } else {
            res.status(403)
                .json({
                    'success': false,
                    'errors': { 'error': 'You are not alowed to do that' },
                });
        }
    });
};


module.exports = {
    verifyToken, verifyTokenAndAuthorization,
    verifyTokenAndAdmin, verifyTokenAndVender
};
