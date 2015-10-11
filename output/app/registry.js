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
            return x.pathToRoot(path.join(__dirname, '..')).requireDirectoryRecursively('./app/src').groupAllInDirectory('./app/src/Commands', 'Commands')['for']('eventmodels').instantiate(function (i) {
                return i.asFunc();
            })['for']('eventstore').instantiate(function (i) {
                return i.asFunc().withParameters(options || {});
            })['for']('corelogger').renameTo('logger').instantiate(function (i) {
                return i.asFunc().withParameters(options.logger || {});
            }).complete();
        });
    } catch (ex) {
        console.log(ex);
        console.log(ex.stack);
    }
    return result;
};