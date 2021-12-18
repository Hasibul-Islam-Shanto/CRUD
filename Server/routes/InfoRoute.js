const express = require('express')
const route = express.Router()
const User = require("../model/InfoModel")
    //Get Method
route.get('/info', async(req, res) => {
    try {
        const user = await User.find()
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

//Post Method....
route.post('/add', async(req, res) => {
        const user = req.body
        const newUser = new User(user)
        try {
            await newUser.save()
            res.status(200).json(user)
        } catch (error) {
            res.status(409).json({ message: error.message })
        }

    })
    // Delet the user....
route.delete('/:id', async(req, res) => {
        try {
            await User.deleteOne({ _id: req.params.id });
            res.status(201).json("User deleted Successfully");
        } catch (error) {
            res.status(409).json({ message: error.message });
        }
    })
    // get user by id
route.get('/:id', async(req, res) => {
        try {
            const user = await User.findById(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    })
    //Edit user...
route.put('/:id', async(req, res) => {
    let user = await User.findById(req.params.id);
    user = req.body;

    const editUser = new User(user);
    try {
        await User.updateOne({ _id: req.params.id }, editUser);
        res.status(201).json(editUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
})
module.exports = route