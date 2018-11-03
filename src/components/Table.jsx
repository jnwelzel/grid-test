import React from 'react';

import Row from './Table/Row';

const Table = ({ headers, rows }) => (
  <table>
    <thead>
      <tr>{headers.map(header => <th key={header.fieldName}>{header.title}</th>)}</tr>
    </thead>
    <tbody>
      {rows.map(row => <Row values={row} />)}
    </tbody>
  </table>
);

Table.defaultProps = {
  headers: [],
  rows: [],
};

export default Table;
