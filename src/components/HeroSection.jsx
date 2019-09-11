import React from "react"

import HeroStyles from "./HeroSection.module.scss"

import HeroImage from "../components/image-gatsby/home-hero"

const HeroSection = () => (
  <section className={HeroStyles.container}>
    <HeroImage />
    <div className={HeroStyles.hero}>
      <h1 className={HeroStyles.title}>Raw Honey Wholesales</h1>
      <p className={HeroStyles.subtitle}>Direct from Bee Farm</p>
    </div>
  </section>
)

export default HeroSection
