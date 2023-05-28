import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <a className="navbar-brand" href="/">
      {props.title}
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav col-md-8">
        <li className="nav-item active">
          <a className="nav-link" href="/">
            {props.home} <span className="sr-only"></span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            About
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="/"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="/">
              Action
            </a>
            <a className="dropdown-item" href="/">
              Another action
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="/">
              Something else here
            </a>
          </div>
        </li>
      </ul>

      <div className="d-flex align-items-center">
  <div className="mr-1">
    <input
      className="form-control"
      type="search"
      placeholder="Search"
      aria-label="Search"
    />
  </div>
  <div className="mr-1 mx-1">
    <button
      className="btn btn-outline-success"
      type="submit"
    >
      Search
    </button>
  </div>
  <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
  </div>
</div>
</div>
  </nav>
  )
}

Navbar.propTypes={
    title:PropTypes.string.isRequired,
    home:PropTypes.string
}

Navbar.defaultProps={
    title:'set title here',
    home:'home here?'
};