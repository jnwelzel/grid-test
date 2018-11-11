import React from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';

import styles from './UsersGrid.scss';
import UsersFilter from './UsersGrid/UsersFilter';
import Section from '../../components/Section';
import Table from '../../components/Table';
import factoryTableHeader from '../../models/tableHeader';

const HEADERS = List([
  factoryTableHeader('userName', 'User name', value => value),
  factoryTableHeader('postTitle', 'Post title', value => value),
  factoryTableHeader('views', 'Views', value => value),
  factoryTableHeader('likes', 'Likes', value => value),
  factoryTableHeader('createdAt', 'Created at', value => `${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}`),
]);

const UsersGrid = ({ users }) => (
  users.size > 0 && (
    <div className={styles.container}>
      <Section label="User Table">
        <UsersFilter />
        <Table
          headers={HEADERS}
          data={users}
        />
      </Section>
    </div>
  )
);

const mapStateToProps = state => ({
  users: state.users.get('filteredUsers'),
});

export default connect(mapStateToProps)(UsersGrid);
