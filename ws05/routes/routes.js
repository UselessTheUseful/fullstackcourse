const express = require('express');
const tank = require('../models/tank');

const router = express.Router();

//TASK4

router.get('/getall', async (req, res) => {
    try {
        const tanks = await tank.find();
        res.status(200).json(tanks);
    } catch (err) {
        res.status(500).json({ err: 'Error retrieving data'});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const tanks = await tank.findById(id);
        if (!tanks) {
            res.status(404).json({error: 'ID error', message: 'ID does not match anything in the database'});
        } else {
            res.status(200).json(tanks);
        }
    } catch (err) {
        if (err["name"] == 'CastError') {
            res.status(400).json({error: 'ID error', message: 'Invalid ID'})
        }
        res.status(500).json({error: 'Error retrieving data'});
    }
});

router.post('/add', async (req, res) => {
    try {
        const data = req.body;
        await tank.create(data);
        res.status(200).json({ message: 'POST request received' });
    } catch (err) {
        if (err["name"] === 'ValidationError') {
            res.status(400).json({error: 'Validation error', message: 'Please make sure addition matches the schema'});
        } else {
            res.status(500).send("Internal server error");
        }
    }
});

router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;

        const updatedTank = await tank.findByIdAndUpdate(id, data, {runValidators: true, new: true});

        if (!updatedTank) {
            res.status(404).json({error: 'ID error', message: 'ID does not match anything in the database'});
        }

        res.status(200).json({message: 'PATCH request received'});
    } catch (error) {
        if (error["name"] === 'ValidationError') {
            res.status(400).json({error: 'Validation error'});
        }
        res.status(500).json({ error: 'Error updating data'});
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedTank = await tank.findByIdAndDelete(req.params.id);
        if (!deletedTank) {
            res.status(404).json({ error: 'Tank not found' });
        }
        res.status(200).json({ message: 'DELETE request received' });
    } catch (error) {
        res.status(500).send();
    }
});

router.use((req, res) => {
    res.status(404).json({error: '404 route not Found'});
});

module.exports = router;