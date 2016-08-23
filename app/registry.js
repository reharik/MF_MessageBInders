/**
 * Created by reharik on 8/13/15.
 */
"use strict";

var dagon = require('dagon');
var path = require('path');

module.exports = function(_options) {
    var options  = _options || {};
    var registry = dagon(options.dagon).registry;
    return registry(x=>
        x.pathToRoot(path.join(__dirname, '..'))
            .requireDirectoryRecursively('./app/src')
            .groupAllInDirectory('./app/src/commands', 'commands')
            .requiredModuleRegistires(['ges-eventsourcing'])
            .for('applicationFunctions').renameTo('appfuncs')
            .complete());
};
