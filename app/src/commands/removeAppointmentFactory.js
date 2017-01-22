module.exports = function(invariant) {
  return function ({
      messageName,
      appointmentId,
      entityName}) {
    
    invariant(appointmentId, `${messageName} requires that you pass the AppointmentId`);
    invariant(entityName, `${messageName} requires that you pass the 
      enitityName since it's a date but the date prop is utc` );
    return {
      messageName,
      appointmentId,
      entityName};
  }
};