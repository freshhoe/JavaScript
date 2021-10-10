const path = require('path');

module.exports = {
  entry: {
    bundle: ['./js/view.js', './js/controller.js', './js/model.js']
  },

  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js'
  }
};
