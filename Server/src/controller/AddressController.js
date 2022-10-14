const Address = require('../model/address');

exports.addAddress = async (req, res, next) =>{
    try {
        const receiverName = req.body.receiver_name;
        const residentNo = req.body.resident_no;
        const residentName = req.body.resident_name;
        const addressType = req.body.address_type;
        const user = req.user._id;
        const address = new Address({
            user: user,
            receiver_name: receiverName,
            resident_no: residentNo,
            resident_name: residentName,
            address_type: addressType
        });
        await address.save();
        res.status(201).json({
            success: true,
            info: {
                message: 'Address added Successfully',
            }
        })
    } catch (error) {
        next(error)
    }
}

exports.viewAddress = async (req, res, next) =>{
    try {
        const _id = req.user._id;
        const address = await Address.find({user: _id});
        if(address.length === 0){
            res.status(400).json({
                success: false,
                errors: {error: 'No address found'},
            });
        } else {
            res.status(200).json({success: true, info: address});
        }
    } catch (error) {
        next(error)
    }
}