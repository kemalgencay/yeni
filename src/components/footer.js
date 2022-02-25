import React from "react"

const Footer = () => {
  return (
    <p>
      © 2019-{new Date().getFullYear()} Kemal Gençay,{" "}
      <a href="https://www.gatsbyjs.org"> Gatsby</a> ile yapılmıştır.
    </p>
  )
}

export default Footer
