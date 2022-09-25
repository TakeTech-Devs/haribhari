const fs = require('fs');

const imageValidate = (req, res, next) => {
  const expectedFileType = ['png', 'jpg', 'jpeg'];
  if (!req.file) {
    return res.status(400).json({message: 'Image is Required'});
  }
  const fileExtension = req.file.mimetype.split('/').pop();
  if (!expectedFileType.includes(fileExtension)) {
    fs.unlinkSync(req.file.path);
    return res.status(400).json({status: false, message: 'Image is not valid'});
  }
  next();
};

const imageUpdateValidate = (req, res, next) => {
  if (req.file) {
    const expectedFileType = ['png', 'jpg', 'jpeg'];
    const fileExtension = req.file.mimetype.split('/').pop();
    if (!expectedFileType.includes(fileExtension)) {
      fs.unlinkSync(req.file.path);
      return res.status(400).json({message: 'Image is not valid'});
    }
    next();
  } else {
    next();
  }
};

module.exports = {imageValidate, imageUpdateValidate};
