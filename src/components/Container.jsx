import React from "react"

import ContainerStyles from "./Container.module.scss"

const Container = ({ children }) => (
  <section className={ContainerStyles.container}> {children} </section>
)

export default Container
