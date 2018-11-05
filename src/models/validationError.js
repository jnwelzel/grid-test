const validationError = {
  fieldName: '',
  message: '',
};

const factoryValidationError = (fieldName, message) => (
  Object.assign(validationError, { fieldName, message })
);

export default factoryValidationError;
