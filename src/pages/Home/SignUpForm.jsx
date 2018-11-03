import React from 'react';

import InputGroup from '../../components/InputGroup';
import styles from './SignUpForm.scss';

const SignUpForm = () => (
  <form className={styles.form}>
    <InputGroup>
      <label htmlFor="userName">User Name</label>
      <input type="text" name="userName" id="userName" placeholder="john.doe" />
    </InputGroup>
    <InputGroup>
      <label htmlFor="postTitle">Post Title</label>
      <input type="text" name="postTitle" id="postTitle" placeholder="Identity Crisis" />
    </InputGroup>
    <InputGroup>
      <label htmlFor="views">Views</label>
      <input type="number" name="views" id="views" placeholder="0" />
    </InputGroup>
    <InputGroup>
      <label htmlFor="likes">Likes</label>
      <input type="number" name="likes" id="likes" placeholder="0" />
    </InputGroup>
    <button type="submit">Submit</button>
  </form>
);

export default SignUpForm;
