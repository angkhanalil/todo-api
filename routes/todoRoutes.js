const express = require("express");
const router = express.Router();
const {todos,addTodos,editTodo,deleteTodo,getTodos} = require("../controllers/todoscontroller")

router.get("/",todos);
router.get("/:id",getTodos);
router.post("/",addTodos);
router.put("/:id",editTodo);
router.delete("/:id",deleteTodo);

module.exports = router;
