import React from 'react';
import PropTypes from 'prop-types';

import styles from './Container.scss';

const Container = ({ children }) => (
  <div className={styles.outer}>
    <div className={styles.content}>
      {children}
    </div>
  </div>
);

Container.defaultProps = {
  children: '',
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
