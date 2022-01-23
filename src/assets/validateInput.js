const Validator = require('validator');
const isEmpty = require('is-empty');

export const validateInput = (data) => {
  const errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.userName = !isEmpty(data.userName) ? data.userName : "";

  // userName: check if field is empty
  if (Validator.isEmpty(data.userName)) {
    errors.userName = "Enter an username";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
