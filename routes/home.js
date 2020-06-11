const express = require("express");
const routers = express.Router();

const Todo = require("../models/Todo");
const date = require("../date");

routers
  .route("/")
  .get(async (req, res) => {
    try {
      const todos = await Todo.find({});

      res.render("index", {
        todos: todos,
        date: date(),
      });
    } catch (err) {
      console.log(err);
    }
  })
  .post(async (req, res) => {
    const { todo } = req.body;
    try {
      const newTodo = new Todo({
        todo: todo,
      });

      await newTodo.save();
    } catch (err) {
      console.log(err);
    }
    res.redirect("/");
  });

routers.post("/delete", async (req, res) => {
  const { data } = req.body;
  try {
    await Todo.deleteOne({ todo: data });
  } catch (error) {
    console.log(err);
  }
  res.redirect("/");
});

module.exports = routers;
