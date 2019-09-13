import React from "react"

import FooterStyles from "./Footer.module.scss"
import Container from "./Container"

const Footer = () => (
  <Container>
    <footer className={FooterStyles.wrapper}>
      <div>© {new Date().getFullYear()}, Son &amp; Ness Enterprise</div>
      <p>SSM Registraction No.: </p>
    </footer>
  </Container>
)

export default Footer
