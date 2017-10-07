const express = require('express');
const router = express.Router();

var TodoItem = require('../models/TodoItem')


router.get('/add', (req, res) => {
  const testTodo = new TodoItem({
      task: "test task"
  });

  testTodo.save()
  .then(response => {
    res.send(response);
  })
  .catch(error => {
    res.send(error);
  })
});


module.exports = router;
