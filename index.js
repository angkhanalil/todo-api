require("dotenv").config();
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const todosRoutes = require("./routes/todoRoutes");
const app = express();

// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/todos", todosRoutes);
 
app.get("/hi", (req, res) => {
  res.send("Hello, World!");
 
});

// 404 Error
app.use((req, res, next) => {
   res.status(404).send("Error 404!");
   
});

app.use(async (err, req, res, next) => {
   
   if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
 
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
