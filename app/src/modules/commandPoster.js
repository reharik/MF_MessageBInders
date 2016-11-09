/**
 * Created by reharik on 7/26/15.
 */
"use strict";

module.exports = function(appfuncs, eventstore, uuid){
    return function(command, commandName, continuationId){
        // fortify commands with metadata like date and user
        command.createDate = new Date();
        var appendData = { expectedVersion: -2};
        appendData.events = [
            appfuncs.eventFunctions.outGoingEvent({
                eventName:commandName,
                data: command,
                metadata:{eventName:commandName, continuationId, streamType:'command'}
            })
        ];

        eventstore.appendToStreamPromise('commands', appendData);
    }
};
