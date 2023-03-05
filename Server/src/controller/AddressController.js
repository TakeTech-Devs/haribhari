const Address = require('../model/address');

exports.addAddress = async (req, res, next) => {
    try {
        const receiverName = req.body.receiver_name;
        const residentNo = req.body.resident_no;
        const residentName = req.body.resident_name;
        const addressType = req.body.address_type;
        const isDefault = req.body.default;
        const user = req.user._id;
        const address = new Address({
            user: user,
            receiver_name: receiverName,
            resident_no: residentNo,
            resident_name: residentName,
            address_type: addressType,
            is_default: isDefault,
        });
        await address.save();
        res.status(201).json({
            success: true,
            info: {
                message: 'Address added Successfully',
            },
        });
    } catch (error) {
        next(error);
    }
};

exports.viewAddress = async (req, res, next) => {
    try {
        const userId = req.user._id;
        const address = await Address.find({ user: userId });
        if (address.length === 0) {
            // res.status(400).json({
            //     success: false,
            //     errors: {error: 'No address found'},
            // });
            res.status(200).json({ success: true, info: [] });
        } else {
            res.status(200).json({ success: true, info: address });
        }
    } catch (error) {
        next(error);
    }
};

exports.getAddress = async (req, res, next) => {
    try {
        const _id = req.params.id;
        const userId = req.user._id;
        const address = await Address
            .findOne({ $and: [{ _id: _id }, { user: userId }] });
        if (!address) {
            res.status(400).json({
                success: false,
                errors: { error: 'No address found' },
            });
        } else {
            res.status(200).json({ success: true, info: address });
        }
    } catch (error) {
        next(error);
    }
};

exports.editAddress = async (req, res, next) => {
    try {
        const _id = req.params.id;
        const userId = req.user._id;
        const address = await Address
            .findOne({ $and: [{ _id: _id }, { user: userId }] });
        if (!address) {
            res.status(404).json({
                success: false,
                errors: { error: 'No address found' },
            });
        } else {
            const receiverName = req.body.receiver_name;
            const residentNo = req.body.resident_no;
            const residentName = req.body.resident_name;
            const addressType = req.body.address_type;
            const address = {
                receiver_name: receiverName,
                resident_no: residentNo,
                resident_name: residentName,
                address_type: addressType,
            };
            const updateAddress = await Address
                .findByIdAndUpdate({ _id: _id }, address);
            if (updateAddress) {
                res.status(200).json({
                    success: true,
                    info: { message: 'Address update successfully' },
                });
            } else {
                res.status(404).json({
                    success: false,
                    errors: { error: 'No address found' },
                });
            }
        }
    } catch (error) {
        next(error);
    }
};

exports.deleteAddress = async (req, res, next) => {
    try {
        const _id = req.params.id;
        const userId = req.user._id;
        const address = await Address
            .findOne({ $and: [{ _id: _id }, { user: userId }] });
        if (!address) {
            res.status(400).json({
                success: false,
                errors: { error: 'No address found' },
            });
        } else {
            const deleteAddress = await Address.findByIdAndDelete({ _id: _id });
            if (deleteAddress) {
                res.status(200).json({
                    success: true,
                    info: { message: 'Address delete successfully' },
                });
            } else {
                res.status(400).json({
                    success: false,
                    errors: { error: 'No address found' },
                });
            }
        }
    } catch (error) {
        next(error);
    }
};

exports.getDefaultAddress = async (req, res, next) => {
    try {
        const userId = req.user._id;
        const address = await Address
            .findOne({ $and: [{ user: userId }, {is_default: true}] });
        if (!address) {
            res.status(400).json({
                success: false,
                errors: { error: 'No address found' },
            });
        } else {
            res.status(200).json({ success: true, info: address });
        }
    } catch (error) {
        next(error);
    }
};
