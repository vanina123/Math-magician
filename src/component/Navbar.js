import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className={styles.navtop}>
    <h2 className={styles.navhead}>Math-magician</h2>
    <nav className={styles.display}>

      <Link className={styles.nav.display} to="/">Home</Link>
      <Link className={styles.nav.display} to="/calculator ">Calculator</Link>
      <Link className={styles.nav.display} to="/quotes">Quotes</Link>
    </nav>
  </div>
);

export default Navbar;
