/**
 * Created by reharik on 8/13/15.
 */

'use strict';

var dagon = require('dagon');
var path = require('path');

module.exports = function (_options) {
    var options = _options || {};
    var container = dagon(options.dagon);
    var result;
    try {
        result = new container(function (x) {
            return x.pathToRoot(path.join(__dirname, '..')).requireDirectoryRecursively('./app/src').groupAllInDirectory('./app/src/Commands', 'Commands').complete();
        });
    } catch (ex) {
        console.log(ex);
        console.log(ex.stack);
    }
    return result;
};