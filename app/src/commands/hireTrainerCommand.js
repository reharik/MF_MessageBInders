module.exports = function(invariant) {
  return function ({birthDate,
                   color,
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
                   zipCode,
                   clients}) {
    invariant(firstName, 'hireTrainer requires that you pass the trainers first name');
    invariant(lastName, 'hireTrainer requires that you pass the trainers last name');
    invariant(email, 'hireTrainer requires that you pass the trainers email');
    invariant(mobilePhone, 'hireTrainer requires that you pass the trainers mobilePhone');
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
      birthDate,
      color,
      clients
    };
  }
};