/**
 * Created by reharik on 7/26/15.
 */

'use strict';

module.exports = function (eventmodels, eventstore) {
    return function (command, commandName) {
        // fortify commands with metadata like date and user
        command.createDate = new Date();
        var appendData = { expectedVersion: -2 };
        appendData.events = [new core.EventData(commandName, { data: command }, { eventName: commandName, continuationId: uuid.v4(), streamType: 'command' })];
        return core.appendToStreamPromise('commands', appendData);
    };
};