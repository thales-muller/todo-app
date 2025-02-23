const knex = require('../database/connection');

const tableName = 'comments';

const createComment = async (commentData) => {
    const [comment] = await knex(tableName).insert(commentData).returning('*');
    return comment;
}

const findCommentById = async (id) => {
    return await knex(tableName).where({ id }).first();
};

const getAllComments = async () => {
    return await knex(tableName).select('*');
};
const updateComment = async (id, updateComment) => {
    await knex(tableName).where({ id }).update(updateComment);
    return findCommentById(id);
};
const deleteComment = async (id) => {
    return await knex(tableName).where({ id }).del();
};

module.exports = {
    createComment,
    findCommentById,
    getAllComments,
    updateComment,
    deleteComment
}