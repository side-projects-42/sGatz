import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const NavLink = (props) => (
  <Link 
    style ={{
      color: 'lavender',
      textDecoration: 'none'
    }}
    activeStyle={{
      fontWeight: 'bold',
      color: 'yellow'
    }}

    to={props.to}
    >
    {props.children}
  </Link>
)


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
            color: `lavender`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav 
        style={{ 
          listStyle: `none`, 
          float: `right`,
           
        }}
      >
        <NavLink activeClassName="active" to="/">Home</NavLink>{'  '}
        <NavLink activeClassName="active" to="/blog/">Blog</NavLink>{'  '}
        <NavLink activeClassName="active" to="/about/">About</NavLink>{'  '}
        <NavLink activeClassName="active" to="/contact/">Contact</NavLink>
      </nav>
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
