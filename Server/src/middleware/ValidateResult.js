const {validationResult} = require('express-validator');
const fs = require('fs');

exports.validateResult=(req, res, next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // if (req.files.length > 0) {
        //     req.files.forEach((element) => {
        //         fs.unlinkSync(element.path);
        //     });
        // }
        if (req.files) {
            req.files.forEach((element) => {
                fs.unlinkSync(element.path);
            });
        }
        return res.status(400)
            .json({
                'success': false,
                'errors': {'error': errors.array()[0].msg},
            });
    }
    next();
};
