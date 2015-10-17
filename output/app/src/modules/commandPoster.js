/**
 * Created by reharik on 7/26/15.
 */


module.exports = function(eventmodels, eventstore){
    return function(command, commandName){
        // fortify commands with metadata like date and user
        command.createDate = new Date();
        var appendData = { expectedVersion: -2};
        appendData.events = [eventmodels.eventData( commandName,
                                            { data:command },
                                            {eventName:commandName, continuationId:uuid.v4(), streamType:'command'})];
        return eventstore.appendToStreamPromise('commands', appendData);
    }
};
