const mongoose = require('mongoose');

const roleSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
    },
}, {
    timestamps: true,
});

// eslint-disable-next-line
const Role= new mongoose.model('Role', roleSchema);
module.exports=Role;
