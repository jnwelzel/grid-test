import React from 'react';

import styles from './Container.scss';

const Container = ({ children }) => (
  <div className={styles.outer}>
    <div className={styles.content}>
      {children}
    </div>
  </div>
);

export default Container;
