const Category = require('../../src/model/category');

try {
  const run = async () =>{
    let categories = new Category();
    categories.name = 'Vegetables';
    categories.slug = 'vegetables';

    let category = await Category.find({'slug': 'vegetables'});
    if (category.length === 0) {
      categories.save();
    }

    categories = new Category();
    categories.name = 'Frozen Veges';
    categories.slug = 'frozen veges';

    category = await Category.find({'slug': 'frozen veges'});
    if (category.length === 0) {
      categories.save();
    }

    categories = new Category();
    categories.name = 'Fruits';
    categories.slug = 'fruits';

    category = await Category.find({'slug': 'fruits'});
    if (category.length === 0) {
      categories.save();
    }
  };
  run();
} catch (error) {
  // eslint-disable-next-line
  console.log(error);
}

