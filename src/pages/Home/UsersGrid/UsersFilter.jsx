import React from 'react';

import InputGroup from '../../../components/InputGroup';
import styles from './UsersFilter.scss';

const UsersFilter = () => (
  <form className={styles.form}>
    <InputGroup>
      <input type="search" />
      <button type="submit">Filter Users</button>
    </InputGroup>
  </form>
);

export default UsersFilter;
