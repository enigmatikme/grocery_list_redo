var path = require('path');
// helps writing paths between files as opposed to writing paths manually 
var SRC_DIR = path.join(__dirname, './client/src');
// __ (global variable in node represents the current directory your file is in )
var DIST_DIR = path.join(__dirname, './client/dist');
// src v dist src: where all jsx goes, dist will be the thing tha actual gets run (compile files webpack bundle files)

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  // where webpack starts looking for files to transpile 
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
    // put it in the dist directory, and use teh filename bundle.js
  },
  module : {
    rules : [
      //tranform your files in a certain way
      {
        test : /\.jsx?/,
        // any file that is in the src directory and ends with a jsx, that will be run with the babel loader 
        include : SRC_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react']
          // first transformatiomn will be the react and the es2015
       }
      }
    ]
  }
};