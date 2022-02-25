import * as React from "react"
import Header from "./header"
import Footer from "./footer"
import "../pages/styles/index.scss"
import * as styles from "./layout.module.scss"

const Layout = (props) => {
  return (
    <div className={styles.container}>
      <div>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
