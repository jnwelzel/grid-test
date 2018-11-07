import React from 'react';
import { connect } from 'react-redux';

import styles from './UsersGrid.scss';
import UsersFilter from './UsersGrid/UsersFilter';
import Section from '../../components/Section';
import Table from '../../components/Table';

const HEADERS = [
  { fieldName: 'userName', title: 'User name', toCellValue: value => value },
  { fieldName: 'postTitle', title: 'Post title', toCellValue: value => value },
  { fieldName: 'views', title: 'Views', toCellValue: value => value },
  { fieldName: 'likes', title: 'Likes', toCellValue: value => value },
  { fieldName: 'createdAt', title: 'Created at', toCellValue: value => `${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}` },
];

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
