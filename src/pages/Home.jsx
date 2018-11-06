import React from 'react';

import SignUpForm from './Home/SignUpForm';
import UsersGrid from './Home/UsersGrid';
import styles from './Home.scss';

const Home = () => (
  <div className={styles.layout}>
    <SignUpForm />
    <UsersGrid />
  </div>
);

export default Home;
