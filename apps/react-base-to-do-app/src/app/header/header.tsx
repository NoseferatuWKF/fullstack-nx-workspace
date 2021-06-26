import './header.module.css';
import { Route, Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item">
          <Link to="/"><img src="../assets/react-todos.png" alt="Logo" width="112" height="28"></img></Link>
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">
          <Link to="/documentation">Documentation</Link>
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              More
            </a>

            <div className="navbar-dropdown">
              <a className="navbar-item">
              <Link to="/about">About</Link>
              </a>
              <a className="navbar-item">
                <Link to="/contact">Contact</Link>
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Report an Issue</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
