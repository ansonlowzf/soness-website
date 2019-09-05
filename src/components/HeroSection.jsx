import React from "react"
import { Link } from "gatsby"

import HeroStyles from "./HeroSection.module.scss"

const HeroSection = () => (
  <section className="HeroStyles.hero">
    <h1 className="HeroStyles.title"></h1>
    <p className="HeroStyles.subtitle"></p>
    <Link to="/contact">Contact</Link>
  </section>
)

export default HeroSection
