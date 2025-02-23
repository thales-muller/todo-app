const knex = require('../database/connection');

const tableName = 'users';

const createUser = async (userData) => {
    return await knex(tableName).insert(userData).returning('*');
}

const findUserById = async (id) => {
    return await knex(tableName).where({ id }).first();
};

const getAllUsers = async () => {
    return await knex(tableName).select('*');
};
const updateUser = async (id, updateUser) => {
    await knex(tableName).where({ id }).update(updateUser);
    return findUserById(id);
};
const deleteUser = async (id) => {
    return await knex(tableName).where({ id }).del();
};

module.exports = {
    createUser,
    findUserById,
    getAllUsers,
    updateUser,
    deleteUser
}