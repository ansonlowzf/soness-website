import React from "react"
import { Link } from "gatsby"

import HeroStyles from "./HeroSection.module.scss"

const HeroSection = () => (
  <section className="HeroStyles.hero">
    <h1 className="HeroStyles.title">
      The only marketing agency on{" "}
      <span class="HeroStyles.accent-color">a mission from God</span>, fully
      dedicated to increase your web traffic.
    </h1>
    <p className="HeroStyles.subtitle">
      We’re two brothers from Chicago that are trying to pay back our debt. We
      can help you with <strong>SEO, SEM content marketing</strong> and whatever
      else.
    </p>
    <Link to="/contact" className="HeroStyles.btn-primary">
      Contact Test
    </Link>
  </section>
)

export default HeroSection
