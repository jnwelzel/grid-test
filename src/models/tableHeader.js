import { Map } from 'immutable';

const tableHeader = {
  fieldName: 'fieldName',
  title: 'Title',
  valueFormatter: value => value,
};

const factoryTableHeader = (fieldName, title, valueFormatter) => Map({
  ...tableHeader, fieldName, title, valueFormatter,
});

export default factoryTableHeader;
