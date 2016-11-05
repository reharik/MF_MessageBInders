module.exports = function(invariant) {
  return function (birthDate,
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
                   zipCode) {
    invariant(firstName, 'hireTrainer requires that you pass the trainers first name');
    invariant(lastName, 'hireTrainer requires that you pass the trainers last name');
    invariant(email, 'hireTrainer requires that you pass the trainers email');
    invariant(mobilePhone, 'hireTrainer requires that you pass the trainers mobilePhone');
    return {
      credentials: {
        email,
        password
      },
      contact: {
        firstName,
        lastName,
        secondaryMobile,
        mobilePhone,
        address: {
          street1,
          street2,
          city,
          state,
          zipCode
        }
      },
      dob,
      color,
      defaultClientRate
    };
  }
};