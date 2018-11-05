import React from 'react';

import styles from './UsersGrid.scss';
import UsersFilter from './UsersGrid/UsersFilter';
import Section from '../../components/Section';
import Table from '../../components/Table';

const UsersGrid = () => (
  <div className={styles.container}>
    <UsersFilter />
    <Section label="User Table">
      <Table
        headers={[{ fieldName: 'userName', title: 'User name' }, { fieldName: 'postTitle', title: 'Post title' }]}
        rows={[['jnwelzel', 'Ohai'], ['johndoe', 'I don\'t know']]}
      />
    </Section>
  </div>
);

export default UsersGrid;
