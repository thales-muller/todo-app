const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.get('/', commentController.getAllUsers);
router.get('/:id', commentController.findUserById);
router.post('/', commentController.createUser);
router.patch('/:id', commentController.updateUser);
router.delete('/:id', commentController.deleteUser);

module.exports = router;