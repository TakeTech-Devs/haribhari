const Category = require('../model/category');
const APIFeatures = require('../utils/apiFeatures');
const fs = require('fs');


exports.create = async (req, res, next) => {
    try {
        let parentId;
        const name = req.body.name;
        const slug = req.body.name.toLowerCase();
        const image = req.file.path;
        const getCategory = await Category.findOne({ slug: slug });
        if (!getCategory) {
            const parentCategoryId = req.body.parent_category;
            if (parentCategoryId) {
                const getParentCategory = await Category
                    .findOne({ _id: parentCategoryId });
                if (!getParentCategory) {
                    return res.status(404).json({
                        success: false,
                        errors: { error: 'Parent category does not exists' },
                    });
                } else {
                    parentId = getParentCategory._id;
                }
            }
            const category = new Category({
                name: name,
                slug: slug,
                parent_category: parentId,
                image: image,
            });
            await category.save();
            res.status(201).json({
                success: true,
                info: { message: 'Category Created Successfully' },
            });
        } else {
            fs.unlinkSync(image);
            res.status(404).json({
                success: false,
                errors: { error: 'Category Already Exists' },
            });
        }
    } catch (error) {
        fs.unlinkSync(image);
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
                errors: { error: 'Category not found' },
            });
        } else {
            res.status(200).json({ success: true, info: categories });
        }
    } catch (error) {
        next(error);
    }
};

exports.categoryOne = async (req, res, next) => {
    try {
        const _id = req.params.id;
        const getCategory = await Category
            .findOne({ _id: _id }).populate('parent_category');
        if (!getCategory) {
            res.status(404).json({
                success: false,
                errors: { error: 'Category not found' }
            });
        } else {
            res.status(200).json({ success: true, info: getCategory });
        }
    } catch (error) {
        next(error);
    }
};

exports.updateCategory = async (req, res, next) => {
    try {
        let slug;
        const _id = req.params.id;
        const getCategory = await Category.findOne({ _id: _id });
        if (!getCategory) {
            res.status(404).json({
                success: false,
                errors: { error: 'Category not found' }
            });
        } else {
            console.log(getCategory);
            const name = req.body.name;
            if(name){
                slug = req.body.name.toLowerCase();
            }
            const oldImage = getCategory.image;
            const parentCategory = req.body.parent_category;
            if (req.file) {
                var newImage = req.file.path;
            }
            const categories = {
                name: name,
                slug: slug,
                parent_category: parentCategory,
                image: newImage || oldImage
            };
            await Category.updateOne({ _id: _id }, categories);
            if (newImage) {
                fs.unlinkSync(oldImage);
              }
            res.status(200).json(
                {
                    success: true,
                    info: { message: 'Category update successfully' },
                });
        }
    } catch (error) {
        next(error);
    }
};

exports.deleteCategory = async (req, res, next) => {
    try {
        const _id = req.params.id;
        const findCategory = await Category.findOne({ _id: _id });
        // console.log(findCategory);return
        if (!findCategory) {
            res.status(400).json({
                success: false,
                errors: { error: 'Category not found' },
            });
        } else {
            const childCategory = await Category
                .find({ parent_category: findCategory._id });
            if (childCategory) {
                await Category.deleteMany({ parent_category: findCategory._id });
            }
            const deleteCategoy = await Category.findByIdAndDelete({ _id: _id });
            if (deleteCategoy) {
                if(findCategory.image){
                    fs.unlinkSync(findCategory.image);
                }
                res.status(200).json({
                    success: true,
                    info: { message: 'Category delete successfully' },
                });
            } else {
                res.status(400).json({
                    success: false,
                    errors: { error: 'No Category found' },
                });
            }
        }
    } catch (error) {
        next(error);
    }
};

