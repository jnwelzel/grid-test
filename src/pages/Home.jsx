import React from 'react';

import SignUpForm from './Home/SignUpForm';
import UsersGrid from './Home/UsersGrid';
import styles from './Home.scss';

export default function Home() {
  return (
    <div className={styles.layout}>
      <SignUpForm />
      <UsersGrid />
    </div>
  );
}
