const { User } = require('../models'); 
const hash = require('../utils/hash');

const createUser = async (user) => {
  const testUser = {
    user_id: '12345',
    firstName : "test",
    // lastName : null,
    email: 'test@example.com',
    password: hash('testing'),
    role: 'user',
  };

  try {
    await User.create(testUser);
    return testUser;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const deleteUser = async () => {
  try {
    await User.destroy({ where: { email: 'test@example.com' } });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {
  createUser,
  deleteUser
}