import React from "react"
import { Link } from "gatsby"

import HeroStylesWithBackground from "./HeroSectionWithBackground.module.scss"

const HeroSectionWithBackground = () => (
  <section className={HeroStylesWithBackground.hero}>
    <h1 className={HeroStylesWithBackground.title}>Raw Honey Wholesales</h1>
    <p className={HeroStylesWithBackground.subtitle}>
      We’re two brothers from Chicago that are trying to pay back our debt. We
      can help you with <strong>SEO, SEM content marketing</strong> and whatever
      else.
    </p>
    <Link to="/contact" className={HeroStylesWithBackground.btnPrimary}>
      Contact
    </Link>
  </section>
)

export default HeroSectionWithBackground
