import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

import InputGroup from '../../components/InputGroup';
import styles from './SignUpForm.scss';
import { setUserPropertyAction, addUserAction } from '../../modules/users';

const SignUpForm = ({
  currentUser,
  errors,
  setUserProperty,
  handleSubmit,
}) => (
  <form className={styles.form} onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
    <InputGroup errorMessage={errors.get('userName')}>
      <label htmlFor="userName">
        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="john.doe"
          value={currentUser.get('userName')}
          onChange={e => setUserProperty('userName', e.target.value)}
        />
        User Name
      </label>
    </InputGroup>
    <InputGroup errorMessage={errors.get('postTitle')}>
      <label htmlFor="postTitle">
        <input
          type="text"
          name="postTitle"
          id="postTitle"
          placeholder="Who Am I?"
          value={currentUser.get('postTitle')}
          onChange={e => setUserProperty('postTitle', e.target.value)}
        />
        Post Title
      </label>
    </InputGroup>
    <InputGroup errorMessage={errors.get('views')}>
      <label htmlFor="views">
        <input
          type="number"
          name="views"
          id="views"
          placeholder="0"
          min="0"
          value={currentUser.get('views')}
          onChange={e => setUserProperty('views', e.target.value, true)}
        />
        Views
      </label>
    </InputGroup>
    <InputGroup errorMessage={errors.get('likes')}>
      <label htmlFor="likes">
        <input
          type="number"
          name="likes"
          id="likes"
          placeholder="0"
          min="0"
          value={currentUser.get('likes')}
          onChange={e => setUserProperty('likes', e.target.value, true)}
        />
        Likes
      </label>
    </InputGroup>
    <button type="submit">Submit</button>
  </form>
);

SignUpForm.propTypes = {
  currentUser: PropTypes.instanceOf(Map).isRequired,
  errors: PropTypes.instanceOf(Map).isRequired,
  setUserProperty: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentUser: state.users.get('currentUser'),
  errors: state.users.get('errors'),
});

const mapDispatchToProps = {
  setUserProperty: setUserPropertyAction,
  handleSubmit: addUserAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
