const webpack = require("webpack");
const path = require("path");

let config = {
  entry: "./src/js/main.js",
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "./js/main.js"
  }
}

module.exports = config;