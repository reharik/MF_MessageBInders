/**
 * Created by reharik on 8/13/15.
 */

var registry = require('./registry');
var extend = require('extend');

module.exports = function index(_options) {
   var options = {
      logger: {
         moduleName: 'MessageBinders'
      }
   };
   extend(options, _options || {});
   var container = registry(options);
   return {
      commands: container.getHashOfGroup('Commands'),
      commandPoster: container.getInstanceOf('commandPoster')
   };
};
