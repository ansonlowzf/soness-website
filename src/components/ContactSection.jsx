import React from "react"

import ContactStyles from "./ContactSection.module.scss"

const Contact = () => (
  <section>
    <h2 className={ContactStyles.title}>Contact Us</h2>
    <p className={ContactStyles.subtitle}>
      <span>Phone:</span>
      +6016-8262 314
    </p>
    <p className={ContactStyles.subtitle}>
      <span>Email:</span>
      zhanfaye@gmail.com
    </p>
    <p className={ContactStyles.subtitle}>
      <span>Stock Address:</span>
      Block A-G-Lobby, Plaza Medan Putra, Jalan Medan Putra 6, Bandar Menjalara
      52200 Kuala Lumpur
    </p>
  </section>
)

export default Contact
