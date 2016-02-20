/**
 * Created by reharik on 8/13/15.
 */
"use strict";

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
