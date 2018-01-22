const { join } = require("path")
const BUILD_DIR = join(__dirname, "build")
const APP_DIR = join(__dirname, "src")


module.exports = {
  entry: join(APP_DIR, "js/app.jsx"),
  devtool: "source-map",
  output: {
    path: BUILD_DIR,
    filename: "app.js"
  },
  target: "electron-renderer",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: ["es2017", "react", "stage-3"]
          }
        }]
      }
    ]
  }
};
