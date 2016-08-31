const babelJest = require('babel-jest');

module.exports = {
  process: function process(src, filename) {
    if (/\.scss$/.test(filename)) {
      return '';
    }
    return babelJest.process(src, filename);
  },
};
