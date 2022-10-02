const Role = require('../../src/model/role');

try {
  const run = async () =>{
    let roles = new Role();
    roles.role_id = 1;
    roles.name = 'Admin';
    roles.slug = 'admin';

    let role = await Role.find({'slug': 'admin'});
    if (role.length === 0) {
      roles.save();
    }

    roles = new Role();
    roles.role_id = 2;
    roles.name = 'User';
    roles.slug = 'user';

    role = await Role.find({'slug': 'user'});
    if (role.length === 0) {
      roles.save();
    }
  };
  run();
} catch (error) {
  // eslint-disable-next-line
  console.log(error);
}

