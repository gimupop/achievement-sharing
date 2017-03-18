const webpack = require("webpack")

module.exports = {
  entry: [
    '../static/js/feed.js',
  ],
  output: {
    path: '../static/js',
    filename: 'app.js',
    publicPath: 'http://localhost:8888'
  },
  watch: true,  
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  devServer: {
    contentBase: 'public'
  },
  devtool: 'source-map'
}
