const userRepository = require('../repositories/userRepository');

const createUser = async (userData) => {
    return await userRepository.createUser(userData);
}

const findUserById = async (id) => {
    const user = userRepository.findUserById(id);

    if (!user) {
        throw new Error('User not found!');
    }

    return user;
};

const getAllUsers = async () => {
    return await userRepository.getAllUsers();
};
const updateUser = async (id, updateUser) => {
    updateUser.update_dt = new Date();
    return await userRepository.updateUser(id, updateUser);
};
const deleteUser = async (id) => {
    const user = await userRepository.findUserById(id);

    if (!user) {
        throw new Error('User does not exist!');
    }

    return await userRepository.deleteUser(id);
};

module.exports = {
    createUser,
    findUserById,
    getAllUsers,
    updateUser,
    deleteUser
}