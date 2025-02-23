const commentService = require("../services/commentService");

exports.createComment = async (req, res) => {
    try {
        const newComment = await commentService.createComment(req.body);
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findCommentById = async (req, res) => {
    try {
        const Comment = await commentService.findCommentById(req.params.id);
        res.status(200).json(Comment);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.getAllComments = async (req, res) => {
    try {
        const Comments = await commentService.getAllComments();
        res.status(200).json(Comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateComment = async (req, res) => {
    try {
        const updatedComment = await commentService.updateComment(req.params.id, req.body);
        res.status(200).json(updatedComment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteComment = async (req, res) => {
    try {
        await commentService.deleteComment(req.params.id);
        res.status(200).json({ message: 'Comment has been deleted.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
