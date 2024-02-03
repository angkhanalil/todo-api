require("dotenv").config();
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const todosRoutes = require("./routes/todoRoutes")
const app = express();
app.use(bodyParser.json());

console.log("start");
app.use("/api/todos",todosRoutes);

const longestCommonPrefix = (arr) => {
  // Assign the first element of arr to result
  let result = arr[0];
  let length = result.length;
console.log("result",result);
  // Iterate for the rest of the elements in the array
  for (let i = 1; i < arr.length; i++) {
    // Find the index of result in the current string
    console.log("for ",arr[i],arr[i].indexOf(result))
    while (arr[i].indexOf(result) !== 0) {
      // Update the matched substring prefix
      console.log('arr[i].indexOf(result) ' ,arr[i] , '  ',arr[i].indexOf(result))
      result = result.substring(0, length - 1);
      length--;
console.log("result -" ,result);
      // Check for an empty case and return if true
      if (result === "") {
        return "-1";
      }
    }
  }

  return result;
};

app.get("/hi", (req, res) => {
  res.send("Hello, World!");

  // Driver code to test the function
  const input = [ "geeks","geeksforgeeks", "geek", "geezer" ];
  console.log("The longest Common Prefix is:", longestCommonPrefix(input));
});

// 404 Error
app.use((req, res, next) => {
  res.status(404).send("Error 404!");
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
