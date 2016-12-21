module.exports = function(invariant) {
  return function ({
    id,
    street1,
    street2,
    city,
    state,
    zipCode
  }) {
    invariant(id, 'updateTrainerAddress requires that you pass the trainers id');
    return {
      street1,
      street2,
      city,
      state,
      zipCode
    }
  };
};