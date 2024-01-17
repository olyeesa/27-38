const UserModel = require('./models/UserModel');

const userModel = new UserModel();

const usersController = async (req, res) => {
  try {
    const users = await userModel.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createUserController = async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await userModel.createUser(userData);
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateUserController = async (req, res) => {
  try {
    const id = req.params.id;
    const userData = req.body;
    await userModel.updateUser(id, userData);
    res.json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteUserController = async (req, res) => {
  try {
    const id = req.params.id;
    await userModel.deleteUser(id);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  usersController,
  createUserController,
  updateUserController,
  deleteUserController,
};