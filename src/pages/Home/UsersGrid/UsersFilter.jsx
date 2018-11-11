import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import InputGroup from '../../../components/InputGroup';
import styles from './UsersFilter.scss';
import { setFilterTermAction, filterUserTableAction } from '../../../modules/users';

const UsersFilter = ({ filterTerm, setFilterTerm, handleSubmit }) => (
  <form className={styles.form} onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
    <InputGroup>
      <input
        type="search"
        placeholder="User Name"
        value={filterTerm}
        onChange={e => setFilterTerm(e.target.value)}
      />
      <button type="submit">Filter Users</button>
    </InputGroup>
  </form>
);

UsersFilter.propTypes = {
  filterTerm: PropTypes.string.isRequired,
  setFilterTerm: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  filterTerm: state.users.get('filterTerm'),
});

const mapDispatchToProps = {
  setFilterTerm: setFilterTermAction,
  handleSubmit: filterUserTableAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersFilter);
