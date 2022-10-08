const fs = require('fs');

const imageValidateMultiple = (req, res, next) => {
    const expectedFileType = ['png', 'jpg', 'jpeg'];
    if (req.files.length === 0) {
        return res.status(400).json({
            success: false,
            errors: {error: 'Image is Required'},
        });
    }
    let fileExtension;
    for (let i=0; i<req.files.length; i++) {
        fileExtension = req.files[i].mimetype.split('/').pop();
        if (!expectedFileType.includes(fileExtension)) {
            req.files.forEach((element) => {
                fs.unlinkSync(element.path);
            });
            return res.status(400).json({
                success: false,
                errors: {error: 'Image is not valid'},
            });
        }
    }
    next();
};

// const imageUpdateValidate = (req, res, next) => {
//     if (req.file) {
//         const expectedFileType = ['png', 'jpg', 'jpeg'];
//         const fileExtension = req.file.mimetype.split('/').pop();
//         if (!expectedFileType.includes(fileExtension)) {
//             fs.unlinkSync(req.file.path);
//             return res.status(400).json({message: 'Image is not valid'});
//         }
//         next();
//     } else {
//         next();
//     }
// };

module.exports = {imageValidateMultiple};
