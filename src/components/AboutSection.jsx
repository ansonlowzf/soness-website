import React from "react"

import AboutStyles from "./AboutSection.module.scss"

import AnsonTakeHoney from "../components/image-gatsby/anson-take-honey"

const AboutSection = () => (
  <section className={AboutStyles.wrapper}>
    <h2 className={AboutStyles.heading}>About Us</h2>
    <p className={AboutStyles.highlight}>
      From Health care purpose to honey wholeseller today
    </p>
    <p>We once were buying honey in the supermarket</p>
    <p>Relative said we should buy from "Pasar Pagi" for pure honey</p>
    <p>
      A friend said we should try "orang asli" raw honey, we bought some beside
      the highway
    </p>
    <p>
      Another friend said we should buy honey from famous and branded local herb
      shop for real raw honey, RM 2xx but worth it!
    </p>
    <p>Government said 80% of honey selling in the market was not 100% pure</p>
    <p>
      Why...? it's so difficult? We just want to drink honey for health care!
    </p>
    <p>
      Until... we had a chance to meet a bee farmer, we learned what is surcose,
      frustose
    </p>
    <p>Today, we are drinking the real raw honey direct from bee farm</p>
    <p>
      Hence, we make real raw honey easy accessisable by honey health care
      drinker
    </p>
    <AnsonTakeHoney />
  </section>
)

export default AboutSection
