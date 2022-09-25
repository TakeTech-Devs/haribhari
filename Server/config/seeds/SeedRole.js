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
    roles.name = 'Author';
    roles.slug = 'author';

    role = await Role.find({'slug': 'author'});
    if (role.length === 0) {
      roles.save();
    }
  };
  run();
} catch (error) {
  console.log(error);
}

