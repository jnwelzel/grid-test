import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

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
      <tr>{headers.map(header => <th key={header.get('fieldName')}>{header.get('title')}</th>)}</tr>
    </thead>
    <tbody>
      {data.map((row, i) => (
        <tr key={`row-${row}-${i}`} className={i === newestRowIndex ? styles.highlight : ''}>
          {headers.map((header, j) => (
            <td key={`col-${i}-${j}`}>{header.get('valueFormatter')(row.get(header.get('fieldName')))}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

Table.defaultProps = {
  newestRowIndex: 0,
};

Table.propTypes = {
  headers: PropTypes.instanceOf(List).isRequired,
  data: PropTypes.instanceOf(List).isRequired,
  newestRowIndex: PropTypes.number,
};

export default withHighestValueRow('createdAt')(Table);
