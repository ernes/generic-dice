const babelJest = require('babel-jest');

module.exports = {
  process: function process(src, filename) {
    // Skip processing scss files in unit tests.
    if (/\.scss$/.test(filename)) {
      return '';
    }
    return babelJest.process(src, filename);
  },
};
