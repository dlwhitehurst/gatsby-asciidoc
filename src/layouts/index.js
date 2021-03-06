import React from "react"
import { Link } from "gatsby"

import typography from "../utils/typography"
const { rhythm } = typography

class DefaultLayout extends React.Component {
  render() {
    return (
      <div
        style={{
          margin: `0 auto`,
          marginTop: rhythm(1.5),
          marginBottom: rhythm(1.5),
          maxWidth: 650,
          paddingLeft: rhythm(3 / 4),
          paddingRight: rhythm(3 / 4),
        }}
      >
        <Link style={{ textDecoration: `none` }} to="/">
          <h3 style={{ color: `tomato`, marginBottom: rhythm(1.5) }}>
            Gatsby Asciidoc Site
          </h3>
        </Link>
        {this.props.children}
      </div>
    )
  }
}

export default DefaultLayout
