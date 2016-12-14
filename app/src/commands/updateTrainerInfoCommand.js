module.exports = function(invariant) {
  return function ({id,
                   birthDate:dob,
                   color,
                   defaultClientRate,
                   firstName,
                   lastName,
                   secondaryPhone,
                   mobilePhone,
                   email,
                   password,
                   street1,
                   street2,
                   city,
                   state,
                   zipCode}) {
    invariant(id, 'updateTrainerInfo requires that you pass the trainers id');
    invariant(firstName, 'updateTrainerInfo requires that you pass the trainers first name');
    invariant(lastName, 'updateTrainerInfo requires that you pass the trainers last name');
    invariant(email, 'updateTrainerInfo requires that you pass the trainers email');
    invariant(mobilePhone, 'updateTrainerInfo requires that you pass the trainers mobilePhone');
    return {
      credentials: {
        password
      },
      contact: {
        firstName,
        lastName,
        secondaryPhone,
        mobilePhone,
        email,
        address: {
          street1,
          street2,
          city,
          state,
          zipCode
        }
      },
      id,
      dob,
      color,
      defaultClientRate
    };
  }
};