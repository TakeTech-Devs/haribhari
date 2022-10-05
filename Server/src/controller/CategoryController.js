const Category = require('../model/category');

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

