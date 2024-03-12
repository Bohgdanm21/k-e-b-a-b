const _ = require('lodash');

function textToKebabCase(text) {
  return _.kebabCase(text);
}

module.exports = textToKebabCase;
console.log(textToKebabCase("Hello, World! This is a test.")); // Повинно вивести "hello-world-this-is-a-test"
