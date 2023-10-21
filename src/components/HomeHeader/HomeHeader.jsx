import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/pca-log.png';
import { homeNavLinks } from '../../navLinks/navLinks';
import styles from './homeHeader.module.css';

export default function HomeNavbar() {
  return (
    <header className={styles.navbarContainer}>
      <div>
        <Link to="/" className={styles.logoContainer}>
          <img src={Logo} alt="PractiCode Logo" />
          <span>PractiCode Academy</span>
        </Link>
      </div>
      <nav className={styles.navListContainer}>
        <ul className={styles.menuList}>
          {homeNavLinks.map((navItem, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={navItem.path}
                  className={(navClass) => navClass.isActive ? `${styles.navActive}` : '' }
                >
                  {navItem.text}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className={styles.btnContainer}>
        <button type="button" className={styles.btn}>Explore Programs</button>
      </div>
    </header>
  )
}
