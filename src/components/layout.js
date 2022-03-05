import * as React from "react"
import Header from "./header"
import Footer from "./footer"
import "../pages/styles/index.scss"
import * as styles from "./layout.module.scss"

const Layout = (props) => {
  return (
    <div className={styles.container}>
      <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
      <div>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
