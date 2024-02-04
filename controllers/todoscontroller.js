"use strict";
const { v4: uuidv4 } = require("uuid");

const todos_data = [];

const todos = (req, res, next) => {
  res.status(200).json(todos_data);
};

const getTodos = (req, res, next) => {
  let result = todos_data.find((obj) => obj.id === req.params.id);
  if (result) {
    res.status(200).json(todos_data.find((obj) => obj.id === req.params.id));
  } else {
     res.status(404).json("data not found.")
   //  next({statusCode:"404",message:"data not found."});
  }
};
const addTodos = (req, res) => {
  todos_data.push({
    id: uuidv4(),
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
    createon: Date.now(),
  });
  res.status(200).json(todos_data);
};

const editTodo = (req, res) => {
  let result = todos_data.findIndex((obj) => obj.id === req.body.id);

  if (result > -1) {
    todos_data[result].title = req.body.title;
    todos_data[result].description = req.body.description;
    todos_data[result].status = false;

    res.status(200).json(todos_data[result]);
  } else {
    res.status(404).json("update failed: data not found!");
  }
};

const deleteTodo = (req, res) => {
  let result = todos_data.findIndex((obj) => obj.id === req.params.id);

  if (result > -1) {
    // todos_data.splice(todos_data, 1);
    todos_data[result].status = false;
    res.status(200).json(todos_data[result]);
  } else {
    res.status(404).json("delete failed: data not found!");
  }
};

module.exports = {
  todos,
  addTodos,
  editTodo,
  deleteTodo,
  getTodos,
};
