const express = require('express');
const router = express.Router();
const todo = require("../models/todo");

router.get('/', async (req, res) => {
    try {
        const data = await todo.find({});
        if (data && data.length != 0) {
            res.status(200).json(data)
        } else {
            res.status(200).json({msg:'no data found'})
        }
    } catch (err) {
        res.status(500).json({error:err.message})
    }
})

router.post('/new', async (req, res) => {
    const newId = (await todo.find({})).length + 1;
    const newTodo = new todo({
        id: newId,
        content: req.body.content
    });
    try {
        const ress = await newTodo.save();
        res.status(201).json(ress)
    } catch (err) {
        res.send(err)
    }

})

router.delete('/delete/:id', async(req, res) => {
    const targetId = req.params.id;
    console.log(typeof (targetId));
    try {
        const ress = await todo.findOneAndDelete({ id: targetId });
        res.json({mes:"done"})
    } catch (err) {
        res.json({mes:err.message})
    }
    
})

module.exports = router;