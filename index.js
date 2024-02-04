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

const longestCommonPrefix = (arr) => {
  if (arr.length >= 1 && arr.length <= 200) {
    let result = arr[0].toLowerCase().trim();
    let length = result.length;

    if (arr.every((obj) => obj.length > 0 && obj.length <= 200)) {
      for (let i = 1; i < arr.length; i++) {
        while (arr[i].toLowerCase().trim().indexOf(result) !== 0) {
          result = result.substring(0, length - 1);
          length--;
          if (result === "") {
            return "There is no common prefix among the input strings.";
          }
        } 
      }
      return result;
    } else {
      return "string is too long.";
    }
  }else{
    return "length  of string should be more than or equal 1 and less than or equal 200.";
  }
};

app.get("/hi", (req, res) => {
  res.send("Hello, World!");

  const input = [
    "Flower",
    "flow",
    " flight",
  ];
  console.log(longestCommonPrefix(input));
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
