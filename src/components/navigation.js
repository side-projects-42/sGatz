import * as React from "react"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <nav
      id="main-navigation"
      className="site-navigation"
      aria-label="Main Navigation"
    >
      <div className="site-nav-wrap">
        <div className="site-nav-inside">
          <ul className="menu">
            <li className="menu-item">
              <Link to="/">Home</Link>
            </li>
            <li clasName="menu-item">
              <Link to="/about/">About</Link>
            </li>
            <li className="menu-item">
              <Link to="/contact/">Contact</Link>
            </li>
            {/* <li className="menu-item"><Link to="/apps/">Apps I Use</Link></li>
               <li className="menu-item">
              <Link to="/gear/">My Gear</Link>
            </li>
            <li className="menu-item"><Link to="/myapps/">Apps I Made</Link></li>
            <li className="menu-item"><Link to="/choirtech/">Choir Tech</Link></li>
            <li className="menu-item"><Link to="/photography/">Photography</Link></li>
            <li className="menu-item"><Link to="/archive/">Archive</Link></li> */}
          </ul>
          <div className="social-links">
            <a
              href="https://twitter.com/sarah11918"
              className="button-circle"
              rel="noopener"
            >
              <span className="fab fa-twitter" aria-hidden="true"></span>
              <span className="screen-reader-text">Twitter</span>
            </a>

            <a
              href="https://twitter.com/search?q=%F0%9F%93%B7%20from%3Asarah11918&amp;src=typd&amp;f=live"
              className="button-circle"
              rel="noopener"
            >
              <span className="fab fa-twitter-square" aria-hidden="true"></span>
              <span className="screen-reader-text">Twitter Images</span>
            </a>

            <a
              href="https://www.flickr.com/sarahrainsberger"
              className="button-circle"
              rel="noopener"
            >
              <span className="fab fa-flickr" aria-hidden="true"></span>
              <span class="screen-reader-text">Flickr</span>
            </a>

            <a
              href="https://www.youtube.com/sarahrainsberger"
              className="button-circle"
              rel="noopener"
            >
              <span className="fab fa-youtube" aria-hidden="true"></span>
              <span className="screen-reader-text">YouTube</span>
            </a>

            <a
              href="https://github.com/sarah11918"
              className="button-circle"
              rel="noopener"
            >
              <span className="fab fa-github" aria-hidden="true"></span>
              <span className="screen-reader-text">GitHub</span>
            </a>

            <a
              href="https://www.gitlab.com/sarah11918"
              className="button-circle"
              rel="noopener"
            >
              <span className="fab fa-gitlab" aria-hidden="true"></span>
              <span className="screen-reader-text">GitLab</span>
            </a>

            <a
              href="https://codepen.io/sarah11918"
              className="button-circle"
              rel="noopener"
            >
              <span className="fab fa-codepen" aria-hidden="true"></span>
              <span className="screen-reader-text">CodePen</span>
            </a>

            <a
              href="http://feeds.feedburner.com/sarahrainsberger"
              rel="noopener"
            >
              RSS
            </a>

            <a
              aria-current="page"
              classNAme=""
              target="_blank"
              rel="noopener"
              href="/"
            >
              sarah@rainsberger.ca
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
