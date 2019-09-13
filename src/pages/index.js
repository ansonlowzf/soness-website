import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Container from "../components/Container"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import ProductSection from "../components/ProductSection"
import ContactSection from "../components/ContactSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <Container>
      <AboutSection />
      <ProductSection />
      <ContactSection />
    </Container>
  </Layout>
)

export default IndexPage
