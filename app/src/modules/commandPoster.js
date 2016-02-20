/**
 * Created by reharik on 7/26/15.
 */
"use strict";

module.exports = function(appfuncs, eventstore, uuid){
    return function(command, commandName){
        // fortify commands with metadata like date and user
        command.createDate = new Date();
        var appendData = { expectedVersion: -2};

        appendData.events = [
            appfuncs.outGoingEvent({
                eventName:commandName,
                data: command,
                metadata:{eventName:commandName, continuationId:uuid.v4(), streamType:'command'}
            })
        ];

        return eventstore.appendToStreamPromise('commands', appendData);
    }
};
