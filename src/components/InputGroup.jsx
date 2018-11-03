import React from 'react';

import styles from './InputGroup.scss';

const InputGroup = ({ children }) => (
  <div className={styles.layout}>
    {children}
  </div>
);

export default InputGroup;
