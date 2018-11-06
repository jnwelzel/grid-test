import React from 'react';

const Row = ({ values }) => (
  values.map(row => <tr>{row.map(col => <td>{col}</td>)}</tr>)
);

export default Row;
