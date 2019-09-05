import React from "react"
import { Link } from "gatsby"

import TapNavStyles from "./TopNav.module.scss"

const TopNav = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/">About Us</Link>
    <Link to="/">Contact Us</Link>
  </nav>
)

export default TopNav
