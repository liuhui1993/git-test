const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill','./src/print.js' ,'./index.js'],
 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
      },
      {
        test:/\.css$/,
        use:[
          "style-loader", //放在前边
          "css-loader"
        ]
      },
      {
        test:/\.(png|svg|gif|jpg)$/,
        use:[
          "file-loader"
        ]
      },
      {
        test:/\.(woff|woff2|eot|ttf|otf)$/,
        use:[
          "file-loader"
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'webpack-react',
      template:'./index.html'
    }),
    new CleanWebpackPlugin(['dist'])
  ]
}