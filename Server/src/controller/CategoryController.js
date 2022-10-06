const Category = require('../model/category');
const APIFeatures = require('../utils/apiFeatures');

exports.create = async (req, res, next) => {
    try {
        const name = req.body.name;
        const slug = name.toLowerCase();
        const parentCategory = req.body.parent_category;
        const getCategory = await Category.findOne({slug: slug});
        if (!getCategory) {
            const getParentCategory = await Category
                .findOne({slug: parentCategory.toLowerCase()});
            if (!getParentCategory) {
                return res.status(404).json({
                    success: false,
                    errors: {error: 'Parent category does not exists'},
                });
            }
            const category = new Category({
                name: name,
                slug: slug,
                parent_category: getParentCategory._id,
            });
            await category.save();
            res.status(201).json({
                success: true,
                info: {message: 'Category Created Successfully'},
            });
        } else {
            res.status(404).json({
                success: false,
                errors: {error: 'Category Already Exists'},
            });
        }
    } catch (error) {
        next(error);
    }
};

exports.findAllCategory = async (req, res, next) => {
    try {
        const resPerPage = req.query.limit;
        const category = Category.find().populate('parent_category');
        const apiFeatures = new APIFeatures(category, req.query)
            .search()
            .pagination(resPerPage);
        const categories = await apiFeatures.query;
        if (categories.length === 0) {
            res.status(400).json({
                success: false,
                errors: {error: 'Category not found'},
            });
        } else {
            res.status(200).json({success: true, info: categories});
        }
    } catch (error) {
        next(error);
    }
};
