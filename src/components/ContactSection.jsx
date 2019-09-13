import React from "react"

import ContactStyles from "./ContactSection.module.scss"

const Contact = () => (
  <section className={ContactStyles.wrapper}>
    <h2 className={ContactStyles.title}>Contact Us</h2>
    <p className={ContactStyles.subtitle}>
      <strong>Phone: </strong>
      016-8262 314 (WhatsApp)
    </p>
    <p className={ContactStyles.subtitle}>
      <strong>Email: </strong>
      zhanfaye@gmail.com
    </p>
    <p className={ContactStyles.subtitle}>
      <strong>Pick Up Address: </strong>
      Block A-G-Lobby, Plaza Medan Putra, Jalan Medan Putra 6, Bandar Menjalara
      52200 Kuala Lumpur
    </p>
  </section>
)

export default Contact
