import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import ProductSection from "../components/ProductSection"
import ContactSection from "../components/ContactSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <AboutSection />
    <ProductSection />
    <ContactSection />
  </Layout>
)

export default IndexPage
