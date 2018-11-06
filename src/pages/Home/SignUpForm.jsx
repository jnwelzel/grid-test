import React from 'react';
import { connect } from 'react-redux';

import InputGroup from '../../components/InputGroup';
import styles from './SignUpForm.scss';
import { setUserPropertyAction, addUserAction } from '../../modules/users';

const SignUpForm = ({ currentUser, errors, setUserProperty, handleSubmit }) => (
  <form className={styles.form} onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
    <InputGroup errorMessage={errors.get('userName')}>
      <label htmlFor="userName">User Name</label>
      <input type="text" name="userName" id="userName" placeholder="john.doe"
        value={currentUser.get('userName')}
        onChange={e => setUserProperty('userName', e.target.value)}
      />
    </InputGroup>
    <InputGroup errorMessage={errors.get('postTitle')}>
      <label htmlFor="postTitle">Post Title</label>
      <input type="text" name="postTitle" id="postTitle" placeholder="Who Am I?"
        value={currentUser.get('postTitle')}
        onChange={e => setUserProperty('postTitle', e.target.value)}
      />
    </InputGroup>
    <InputGroup errorMessage={errors.get('views')}>
      <label htmlFor="views">Views</label>
      <input type="number" name="views" id="views" placeholder="0" min="0"
        value={currentUser.get('views')}
        onChange={e => setUserProperty('views', e.target.value, true)}
      />
    </InputGroup>
    <InputGroup errorMessage={errors.get('likes')}>
      <label htmlFor="likes">Likes</label>
      <input type="number" name="likes" id="likes" placeholder="0" min="0"
        value={currentUser.get('likes')}
        onChange={e => setUserProperty('likes', e.target.value, true)}
      />
    </InputGroup>
    <button type="submit">Submit</button>
  </form>
);

const mapStateToProps = state => ({
  currentUser: state.users.get('currentUser'),
  errors: state.users.get('errors'),
});

const mapDispatchToProps = {
  setUserProperty: setUserPropertyAction,
  handleSubmit: addUserAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
