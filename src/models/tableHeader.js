const tableHeader = {
  fieldName: '',
  title: '',
};

const factoryTableHeader = (fieldName, title) => (
  Object.assign(tableHeader, { fieldName, title })
);

export default factoryTableHeader;
