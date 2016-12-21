module.exports = function(invariant) {
  return function ({firstName,
                   lastName,
                   secondaryPhone,
                   mobilePhone,
                   email,
                   street1,
                   street2,
                   city,
                   state,
                   zipCode}) {
    invariant(firstName, 'addClient requires that you pass the clients first name');
    invariant(lastName, 'addClient requires that you pass the clients last name');
    invariant(email, 'addClient requires that you pass the clients email');
    invariant(mobilePhone, 'addClient requires that you pass the clients mobilePhone');
    return {
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
      }
    };
  }
};