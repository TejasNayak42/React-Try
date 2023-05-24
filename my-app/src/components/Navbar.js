import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
            Link
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

      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button
        className="btn btn-outline-success my-2 my-sm-0 col-md-1"
        type="submit"
      >
        Search
      </button>
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