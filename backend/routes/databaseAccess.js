const express = require('express');
const router = express.Router();

var TodoItem = require('../models/TodoItem')


router.post('/add', (req, res) => {
  console.log('inside post route', req.body.taskText)
  const testTodo = new TodoItem({
      taskText: req.body.taskText
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
