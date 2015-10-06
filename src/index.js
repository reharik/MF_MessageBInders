/**
 * Created by reharik on 8/13/15.
 */

var container = require('../registry');

module.exports = function index(options) {
   return {
      commands: container.getInstanceOf(commands),
      commandPoster: commandPoster
   };
};