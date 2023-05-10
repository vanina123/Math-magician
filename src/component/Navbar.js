import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <div className={styles.navtop}>
    <h2 className={styles.navhead}>Math Magician</h2>
    <nav className={styles.navbar}>
      <Link className={styles.menu} to="/">Home</Link>
      <Link className={styles.menu} to="/calculator ">Calculator</Link>
      <Link className={styles.menu} to="/quotes">Quotes</Link>
    </nav>
  </div>
);

export default Navbar;
