module.exports = function(invariant) {
  return function ({birthDate,
                   color,
                   firstName,
                   lastName,
                   secondaryPhone,
                   mobilePhone,
                   email,
                   password,
                   role,
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
    invariant(password, 'hireTrainer requires that you pass the trainers password');
    invariant(role, 'hireTrainer requires that you pass the trainers role');
    return {
      credentials: {
        password,
        role
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