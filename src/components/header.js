import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul 
        style={{ 
          listStyle: `none`, 
          float: `right`,
           
        }}
      >
        <Link to="/" style={{
          textDecoration: `none`}}>Home</Link>{'  '}
        <Link to="/blog/" style={{
          textDecoration: `none`}}>Blog</Link>{'  '}
        <Link to="/about/" style={{
          textDecoration: `none`}}>About</Link>{'  '}
        <Link to="/contact/" style={{
          textDecoration: `none`}}>Contact</Link>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
