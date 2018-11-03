const tableHeader = {
  fieldName: '',
  title: '',
};

const factoryTableHeader = (fieldName, title) => (
  Object.create(tableHeader, {
    fieldName: {
      value: fieldName,
    },
    title: {
      value: title,
    },
  })
);

export default factoryTableHeader;
