const Validator = require('validator');
const isEmpty = require('is-empty');

export const validateInput = (data) => {
  const errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.userInput = !isEmpty(data.userInput) ? data.userInput : "";

  // userInput: check if field is empty
  if (Validator.isEmpty(data.userInput)) {
    errors.userInput = "Enter an username";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
