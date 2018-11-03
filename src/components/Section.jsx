import React from 'react';

import styles from './Section.scss';
import FancyHeader from './FancyHeader';

const Section = ({ label, children }) => (
  <div className={styles.layout}>
    <FancyHeader label={label} />
    <div>{children}</div>
  </div>
);

export default Section;
