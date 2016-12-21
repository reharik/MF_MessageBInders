
var registry = require('./registry');
var extend = require('extend');

module.exports = function index(_options) {
   var options = {
      logger: {
         moduleName: 'MessageBinders'
      }
   };
   extend(options, _options || {});
   return registry(options);
};
