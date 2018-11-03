import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.scss';

const Header = () => (
  <ul className={styles.main}>
    <li>
      <NavLink exact to="/" className={styles.navLink} activeClassName={styles.active}>Home</NavLink>
    </li>
    <li>
      <NavLink exact to="/about" className={styles.navLink} activeClassName={styles.active}>About</NavLink>
    </li>
  </ul>
);

export default Header;
