const userService = require("../services/userService");

exports.createUser = async(req, res) =>{
    try {
        const newUser = await userService.createUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.findUserById = async(req, res) =>{
    try {
        const user = await userService.findUserById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
};

exports.getAllUsers = async(req, res) =>{
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.updateUser = async(req, res) =>{
    try {
        const updatedUser = await userService.updateUser(req.params.id, req.body);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.deleteUser = async(req, res) =>{
    try {
        await userService.deleteUser(req.params.id);
        res.status(200).json({message: 'User has been deleted.'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};
