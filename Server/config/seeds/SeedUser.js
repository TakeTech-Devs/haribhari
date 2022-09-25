const User = require('../../src/model/user');

try {
  const run = async () =>{
    let users = new User();
    users.role_id = 1;
    users.name = 'Mr. Admin';
    users.email = 'admin@gmail.com';
    users.account_verified = true;
    users.password = '1234';

    let user = await User.find({'email': 'admin@gmail.com'});
    if (user.length === 0) {
      users.save();
    }


    users = new User();
    users.role_id = 2;
    users.name = 'Mr. Author';
    users.email = 'author@gmail.com';
    users.account_verified = true;
    users.password = '1234';

    user = await User.find({'email': 'author@gmail.com'});
    if (user.length === 0) {
      users.save();
    }
  };
  run();
} catch (error) {
  console.log(error);
}
