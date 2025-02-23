const commentRepository = require('../repositories/commentRepository');

const createComment = async (CommentData) => {
    return await commentRepository.createComment(CommentData);
}

const findCommentById = async (id) => {
    const Comment = commentRepository.findCommentById(id);

    if (!Comment) {
        throw new Error('Comment not found!');
    }

    return Comment;
};

const getAllComments = async () => {
    return await commentRepository.getAllComments();
};
const updateComment = async (id, updateComment) => {
    updateComment.update_dt = new Date();
    return await commentRepository.updateComment(id, updateComment);
};
const deleteComment = async (id) => {
    const Comment = await commentRepository.findCommentById(id);

    if (!Comment) {
        throw new Error('Comment does not exist!');
    }

    return await commentRepository.deleteComment(id);
};

module.exports = {
    createComment,
    findCommentById,
    getAllComments,
    updateComment,
    deleteComment
}