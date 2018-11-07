import React from 'react';

import styles from './FancyHeader.scss';

const FancyHeader = ({ label, width }) => (
  <div className={styles.component} style={{ width }}>{label}</div>
);

FancyHeader.defaultProps = {
  width: '100%',
};

export default FancyHeader;
