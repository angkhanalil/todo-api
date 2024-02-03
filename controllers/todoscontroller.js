"use strict";
const { v4: uuidv4 } = require("uuid");

const todos_data = [];

const todos = (req, res) => {
  res.status(200).json(todos_data);
};

const getTodos = (req, res) => {
  console.log(req.params.id);
  let result = todos_data.find((obj) => obj.id === req.params.id);
  if (result) {
    res.status(200).json(todos_data.find((obj) => obj.id === req.params.id));
  } else {
    res.status(404).json("data not found!");
  }
};
const addTodos = (req, res) => {
  console.log(req.body);
  todos_data.push({
    id: uuidv4(),
    title: req.body.title,
    description: req.body.description,
    createon: Date.now(),
  });
  res.status(200).json(todos_data);
};

const editTodo = (req, res) => {
  console.log(req.body);
  res.status(200).json("sdf");
};

const deleteTodo = (req, res) => {
  let result = todos_data.findIndex((obj) => obj.id === req.params.id);
  console.log("result ",result);
  if (result > -1) {
    todos_data.splice(todos_data,1);
    res.status(200).json(todos_data);
  } else {
    res.status(404).json("data not found!");
  }
};

module.exports = {
  todos,
  addTodos,
  editTodo,
  deleteTodo,
  getTodos,
};
