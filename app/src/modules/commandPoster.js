/**
 * Created by reharik on 7/26/15.
 */
"use strict";

module.exports = function(eventstore, eventmodels) {
    var buildCommand = function(command, commandName) {
        // fortify commands with metadata like date and user
        command.createDate = new Date();
        var appendData     = {expectedVersion: -2};
        return appendData.events = [eventmodels.eventData(commandName,command,{
            eventName     : commandName,
            continuationId: uuid.v4(),
            streamType    : 'command'
        })];
    };

    var dispatchCommand = function(command, commandName)
    {
        return appendCommand(buildCommand(command, commandName));
    };

    //appendCommand::  JSON -> Future<string|JSON>
    var appendCommand = eventstore.appendToStreamPromise('command');

    return {
        dispatchCommand
    }
};