import React from 'react';

const Row = ({ values }) => (
  values.map(
    (row, i) => (
      <tr key={`row-${i}-${row}`}>
        {row.map((col, j) => (
          <td key={`col-${i}-${j}-${col}`}>{col}</td>
        ))}
      </tr>
    ),
  )
);

export default Row;
