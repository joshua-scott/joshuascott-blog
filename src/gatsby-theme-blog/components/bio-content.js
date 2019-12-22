import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Personal blog by <Styled.a href="https://joshuascott.io/twitter">Joshua Scott</Styled.a>,
    <br />
    a web developer currently interested in JavaScript and GraphQL
  </Fragment>
)
