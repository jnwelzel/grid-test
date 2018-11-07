import React from 'react';

import styles from './Table.scss';

const withHighestValueRow = highestProperty => BaseComponent => (baseProps) => {
  const { data } = baseProps;
  let decoratedRowIndex = 0;
  if (data.size > 1) {
    let highest = data.get(0).get(highestProperty);
    for (let index = 1; index < data.size; index++) {
      const element = data.get(index);
      if (element.get(highestProperty) > highest) {
        highest = element.get(highestProperty);
        decoratedRowIndex = index;
      }
    }
  }

  return (
    <BaseComponent
      newestRowIndex={decoratedRowIndex}
      {...baseProps}
    />
  );
};

const Table = ({ headers, data, newestRowIndex }) => (
  <table>
    <thead>
      <tr>{headers.map(header => <th key={header.fieldName}>{header.title}</th>)}</tr>
    </thead>
    <tbody>
      {data.map((row, index) => (
        <tr key={`row-${row}-${index}`} className={index === newestRowIndex ? styles.highlight : ''}>
          {headers.map((header, jindex) => (
            <td key={`cell-${index}-${jindex}`}>{header.toCellValue(row.get(header.fieldName))}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

Table.defaultProps = {
  headers: [],
  rows: [],
};

export default withHighestValueRow('createdAt')(Table);
