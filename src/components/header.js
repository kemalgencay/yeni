import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './header.module.scss';

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <StaticImage alt="bir Istanbul manzarası" src="../images/header1.jpg" />
        <StaticImage className={styles.picture} alt="Öğrenmek yaparak olur" src="../images/ogrenmek.jpg" />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navList}>
            <Link className={styles.navLink} activeClassName={styles.activeNavLink} to="/">
              Ana Sayfa
            </Link>
          </li>
          <li className={styles.navList}>
            <Link className={styles.navLink} activeClassName={styles.activeNavLink} to="/about">
              Hakkımda
            </Link>
          </li>
          <li className={styles.navList}>
            <Link className={styles.navLink} activeClassName={styles.activeNavLink} to="/blog">
              Dersler
            </Link>
          </li>
          <li className={styles.navList}>
            <Link className={styles.navLink} activeClassName={styles.activeNavLink} to="/yazi">
              Görüşlerim
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Header;
