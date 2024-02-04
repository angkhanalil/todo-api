const longestCommonPrefix = (arr) => {
  // Assign the first element of arr to result
  if (arr.length >= 1 && arr.length <= 200) {
    let result = arr[0].toLowerCase();
    let length = result.length;
    console.log("result", result);
    // Iterate for the rest of the elements in the array
    for (let i = 1; i < arr.length; i++) {
      // Find the index of result in the current string
      let arrLowercase = arr[i].toLowerCase();
      console.log("for ", arr[i], arr[i].indexOf(result));
      while (arr[i].toLowerCase().indexOf(result) !== 0) {
        // Update the matched substring prefix
        console.log(
          "arr[i].indexOf(result) ",
          arr[i],
          "  ",
          arr[i].indexOf(result)
        );
        result = result.substring(0, length - 1);
        length--;
        f;
        console.log("result -", result);
        // Check for an empty case and return if true
        if (result === "") {
          return "-1";
        }
      }
    }
    return result;
  }else{
    return "";
  }
};

// Driver code to test the function
const input = ["geeks", "geeksforgeeks", "geek", "geezer"];
console.log("The longest Common Prefix is:", longestCommonPrefix(input));
