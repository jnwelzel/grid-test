import React from 'react';

const Row = ({ values }) => (
  <tr>
    {values.map(val => <td>{val}</td>)}
  </tr>
);

export default Row;
