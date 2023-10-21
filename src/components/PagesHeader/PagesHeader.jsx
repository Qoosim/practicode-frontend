import React from 'react'
import Logo from '../../assets/pca-log.png';
import styles from './pagesHeader.module.css';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../../navLinks/navLinks';

export default function PagesNavbar() {
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
          {navLinks.map((navItem, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={navItem.path}
                  className={(navClass) => navClass.isActive ? `${styles.navActive}` : ''}
                >
                  {navItem.text}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className={styles.btnContainer}>
        <button type="button" className={styles.btn}>Explore Program</button>
      </div>
    </header>
  )
}
