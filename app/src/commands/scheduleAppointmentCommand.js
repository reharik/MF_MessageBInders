module.exports = function(invariant) {
  return function ({appointmentType,
    date,
    startTime,
    endTime,
    trainer,
    clients,
    notes,
    entityName}) {
    invariant(appointmentType, 'scheduleAppointment requires that you pass the appointmentType');
    invariant(date, 'scheduleAppointment requires that you pass the appointment date');
    invariant(startTime, 'scheduleAppointment requires that you pass the appointment start time');
    invariant(endTime, 'scheduleAppointment requires that you pass the trainer');
    invariant(clients && clients.length > 0, 'scheduleAppointment requires that you pass at lease 1 client');
    invariant(entityName, `scheduleAppointment requires that you pass the 
      enitityName since it's a date but the date prop is utc` );
    return {appointmentType,
      date,
      startTime,
      endTime,
      trainer,
      clients,
      notes,
      entityName
    };
  }
};