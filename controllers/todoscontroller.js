"use strict";

const todos = (req, res) => {
  res.status(200).json("sdf");
};
const getTodos = (req, res) => {
    res.status(200).json("sdf");
  };
const addTodos = (req, res) => {
  console.log(req.body);
  res.status(200).json("sdf");
};

const editTodo = (req, res) => {
  console.log(req.body);
  res.status(200).json("sdf");
};

const deleteTodo = (req, res) => {
    console.log(req.body);
    res.status(200).json("sdf");
  };

module.exports = {
  todos,
  addTodos,editTodo,deleteTodo,getTodos
};
