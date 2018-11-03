import React from 'react';

import styles from './FancyHeader.scss';

const FancyHeader = ({ label }) => (
  <div className={styles.component}>{label}</div>
);

export default FancyHeader;
