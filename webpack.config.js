const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};

// "./src/dom.js",
// "./src/task.js",
// "./src/project.js",
// "./src/todo.js",
// "./src/storage.js",
