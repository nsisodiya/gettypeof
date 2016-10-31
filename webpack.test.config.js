/**
 * Created by narendrasisodiya on 01/11/16.
 */

module.exports = {
  entry: "mocha!./test/test.js",
  output: {
    //path: __dirname + "/dist",
    path: __dirname ,
    filename: "testBundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};