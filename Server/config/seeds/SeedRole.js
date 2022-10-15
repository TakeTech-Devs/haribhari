const Role = require('../../src/model/role');

try {
    const run = async () =>{
        let roles = new Role();
        roles.name = 'Admin';
        roles.slug = 'admin';

        let role = await Role.find({'slug': 'admin'});
        if (role.length === 0) {
            roles.save();
        }

        roles = new Role();
        roles.name = 'User';
        roles.slug = 'user';

        role = await Role.find({'slug': 'user'});
        if (role.length === 0) {
            roles.save();
        }

        roles = new Role();
        roles.name = 'Seller';
        roles.slug = 'seller';

        role = await Role.find({'slug': 'seller'});
        if (role.length === 0) {
            roles.save();
        }

        roles = new Role();
        roles.name = 'Delivery';
        roles.slug = 'delivery';

        role = await Role.find({'slug': 'delivery'});
        if (role.length === 0) {
            roles.save();
        }
    };
    run();
} catch (error) {
    // eslint-disable-next-line
  console.log(error);
}

