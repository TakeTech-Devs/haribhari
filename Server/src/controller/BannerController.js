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

exports.enableBanner = async(req, res, next) => {
    try {
        const id = req.params.id;
        const getBanner = await Banner.findOne({ _id: id });
        if(getBanner){
            await Banner.findByIdAndUpdate({_id: id}, {status: true})
            return res.status(200).json({
                success: true,
                errors: { error: 'Banner enabled' },
            })
        } else {
            return res.status(404).json({
                success: false,
                errors: { error: 'No data found' },
            })
        }
    } catch (error) {
       next(error) 
    }
}

exports.disableBanner = async(req, res, next) => {
    try {
        const _id = req.params.id;
        const getBanner = await Banner.findOne({ _id: _id });
        if(getBanner){
            await Banner.updateOne({_id: _id}, {status: false});
            return res.status(200).json({
                success: true,
                errors: { error: 'Banner disabled' },
            })
        } else {
            return res.status(404).json({
                success: false,
                errors: { error: 'No data found' },
            })
        }
    } catch (error) {
       next(error) 
    }
}