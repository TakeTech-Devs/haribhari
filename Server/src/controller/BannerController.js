const Banner = require('../model/banner');

exports.create = async(req, res, next) =>{
    try {
        const title = req.body.title;
        const image = req.file.path;
        const banner = new Banner({
            banner_image: image,
            title: title
        });
        const createBnner = await banner.save();
        if(createBnner){
            return res.status(201).json({
                success: true,
                info: {message: 'Banner added successfully'},
            })
        } 
    } catch (error) {
        next(error)
    }
}

exports.delete = async(req, res, next) =>{
    try {
        const id = req.params.id;
        const deleteBnner = await Banner.findByIdAndDelete({ _id: id});
        if(deleteBnner){
            res.status(200).json({
                success: true,
                info: { message: 'Banner delete successfully' },
            });
        } 
    } catch (error) {
        next(error)
    }
}