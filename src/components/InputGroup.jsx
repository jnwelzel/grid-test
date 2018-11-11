import React from 'react';
import PropTypes from 'prop-types';

import styles from './InputGroup.scss';

const InputGroup = ({ children, errorMessage }) => (
  <div className={styles.layout}>
    {children}
    {errorMessage && <div className={styles.error}>{errorMessage}</div>}
  </div>
);

InputGroup.defaultProps = {
  children: '',
  errorMessage: null,
};

InputGroup.propTypes = {
  children: PropTypes.node,
  errorMessage: PropTypes.string,
};

export default InputGroup;
