import React from "react"
const Footer = () => {
  return (
    <span>
      © {new Date().getFullYear()} Kemal Gençay,{" "}
      <a href="https://www.gatsbyjs.org"> Gatsby</a> ile yapılmıştır.{" "}
    </span>
  )
}

export default Footer
