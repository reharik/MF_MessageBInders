module.exports = function(appfuncs, eventstore, uuid){
    return async function(command, commandName, continuationId) {
        // fortify commands with metadata like date and user
      console.log(`==========eventstore=========`);
      console.log(eventstore);
      console.log(`==========END eventstore=========`);
      command.createDate = new Date();
      var event = eventstore.createJsonEventData(uuid.v4(), command, {eventName:commandName, continuationId, streamType:'command'}, commandName);
      await eventstore.gesConnection.appendToStream('commands', eventstore.expectedVersion.any, event, eventstore.credentials);
    }
};
