import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./header.module.scss"

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <StaticImage
          alt="bir Istanbul manzarası"
          src="../../content/images/header1.jpg"
        ></StaticImage>
        <StaticImage
          className={styles.picture}
          alt="Öğrenmek yaparak olur"
          src="../../content/images/ogrenmek.jpg"
        ></StaticImage>
      </div>
      {/* <div>
        <h1 className={styles.title}>Öğrenmek yaparak olur</h1>
      </div> */}
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              Link
              to="/"
            >
              Ana Sayfa
            </Link>
          </li>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to="/about"
              ti
            >
              Hakkimda
            </Link>
          </li>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to="/blog"
            >
              Dersler
            </Link>
          </li>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to="/yazi"
            >
              Görüşlerim
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
export default Header
