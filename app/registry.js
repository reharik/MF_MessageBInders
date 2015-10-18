/**
 * Created by reharik on 8/13/15.
 */
"use strict";

var dagon = require('dagon');
var path = require('path');

module.exports = function(_options) {
    var options = _options || {};
    var container = dagon(options.dagon);
    var result;
    try {
        result = new container(x=> x.pathToRoot(path.join(__dirname, '..'))
            .requireDirectoryRecursively('./app/src')
            .groupAllInDirectory('./app/src/commands', 'Commands')
            .for('eventmodels').instantiate(i=>i.asFunc())
            .for('eventstore').instantiate(i=>i.asFunc().withParameters(options || {}))
            .for('corelogger').renameTo('logger').instantiate(i=>i.asFunc().withParameters(options.logger || {}))

            .complete());
    } catch (ex) {
        console.log(ex);
        console.log(ex.stack);
    }
    return result;
};
