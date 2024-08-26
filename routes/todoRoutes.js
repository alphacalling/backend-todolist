const express = require('express');
const { createTodo } = require('../controller/createTodo');
const { getTodo } = require('../controller/getTodo');
const { getTodoById } = require('../controller/getByIdTodo');
const { deleteTodo } = require('../controller/deleteTodo');
const { updateTodo } = require('../controller/updateTodo');
const router = express.Router();

router.post('/createTodo', createTodo);
router.get('/getTodo', getTodo);
router.get('/getTodoById/:id', getTodoById);
router.delete('/delete/:id', deleteTodo);
router.put('/update/:id', updateTodo);

module.exports = router;