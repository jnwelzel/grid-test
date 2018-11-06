import React from 'react';

import styles from './InputGroup.scss';

const InputGroup = ({ children, errorMessage }) => (
  <div className={styles.layout}>
    {children}
    {errorMessage && <div>{errorMessage}</div>}
  </div>
);

export default InputGroup;
