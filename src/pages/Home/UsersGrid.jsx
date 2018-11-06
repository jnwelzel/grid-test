import React from 'react';
import { connect } from 'react-redux';

import styles from './UsersGrid.scss';
import UsersFilter from './UsersGrid/UsersFilter';
import Section from '../../components/Section';
import Table from '../../components/Table';

const HEADERS = [
  { fieldName: 'userName', title: 'User name' },
  { fieldName: 'postTitle', title: 'Post title' },
  { fieldName: 'views', title: 'Views' },
  { fieldName: 'likes', title: 'Likes' },
  { fieldName: 'createdAt', title: 'Created at' },
];

const UsersGrid = ({ users }) => (
  users.size > 0 && (
    <div className={styles.container}>
      <Section label="User Table">
        <UsersFilter />
        <Table
          headers={HEADERS}
          rows={[users.map(user => user.toJS().toTableRow())]}
        />
      </Section>
    </div>
  )
);

const mapStateToProps = state => ({
  users: state.users.get('filteredUsers'),
});

export default connect(mapStateToProps)(UsersGrid);
