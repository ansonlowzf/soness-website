import React from "react"
import { StyledAnessChee, StyledProfilePicture } from "./AnessChee.styled"

import AnsonProfilePhoto from "../image-gatsby/anson-take-honey"

const AnessCheeNameCard = () => (
  <StyledAnessChee>
    <h1>Son &amp; Ness Enterprise</h1>
    <StyledProfilePicture>
      <AnsonProfilePhoto />
    </StyledProfilePicture>
  </StyledAnessChee>
)

export default AnessCheeNameCard
