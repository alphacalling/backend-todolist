const express = require('express');
const { createTodo } = require('../controller/createTodo');
const router = express.Router();

router.post('/createTodo', createTodo);

module.exports = router;