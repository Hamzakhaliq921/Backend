const express = require('express');
const router = express.Router();
let tasks = require('../data/tasks');

router.get('/', (req, res) => {
    res.send('Tasks working');
});

// GET all tasks
router.get('/', (req, res) => {
    res.json(tasks);
});

// POST new task
router.post('/', (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        status: 'pending'
    };
    tasks.push(newTask);
    res.json(newTask);
});

// PUT update task
router.put('/:id', (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    if (!task) return res.status(404).send('Task not found');

    task.status = req.body.status;
    res.json(task);
});

// DELETE task
router.delete('/:id', (req, res) => {
    tasks = tasks.filter(t => t.id != req.params.id);
    res.send('Task deleted');
});

module.exports = router;