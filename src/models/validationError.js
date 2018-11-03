const validationError = {
  fieldName: '',
  message: '',
};

const factoryValidationError = (fieldName, message) => (
  Object.create(validationError, {
    fieldName: {
      value: fieldName,
    },
    message: {
      value: message,
    },
  })
);

export default factoryValidationError;
