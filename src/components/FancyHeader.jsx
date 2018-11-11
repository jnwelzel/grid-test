import React from 'react';
import PropTypes from 'prop-types';

import styles from './FancyHeader.scss';

const FancyHeader = ({ label, width }) => (
  <div className={styles.component} style={{ width }}>{label}</div>
);

FancyHeader.defaultProps = {
  width: '100%',
  label: 'FancyHeader',
};

FancyHeader.propTypes = {
  label: PropTypes.string,
  width: PropTypes.string,
};

export default FancyHeader;
