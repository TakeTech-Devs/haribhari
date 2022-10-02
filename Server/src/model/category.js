const mongoose = require('mongoose');

const categorySchema= new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
    },
    parent_category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
    },
}, {
    timestamps: true,
});

// eslint-disable-next-line
const Category= new mongoose.model('Category', categorySchema);
module.exports=Category;
