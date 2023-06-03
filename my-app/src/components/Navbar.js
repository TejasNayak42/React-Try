import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <Link className="navbar-brand" to="/">
      {props.title}
    </Link>
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
          <Link className="nav-link" to="/">
            {props.home} <span className="sr-only"></span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">
            About
          </Link>
        </li>
          {/**this is for dropdown option in navbar */}
                    {/* <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to="/"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Dropdown
                      </Link>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="/">
                          Action
                        </Link>
                        <Link className="dropdown-item" to="/">
                          Another action
                        </Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="/">
                          Something else here
                        </Link>
                      </div>
                    </li> */}
      </ul>

    <div className=" d-flex ms-auto">

        <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px', width:'30px',cursor:'pointer'}}></div>
        <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'30px', width:'30px',cursor:'pointer'}}></div>
        <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px', width:'30px',cursor:'pointer'}}></div>
        <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px', width:'30px',cursor:'pointer'}}></div>
        <div className="bg-info rounded mx-2" onClick={()=>{props.toggleMode('info')}} style={{height:'30px', width:'30px',cursor:'pointer'}}></div>
        <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleMode('dark')}} style={{height:'30px', width:'30px',cursor:'pointer'}}></div>

      {/**This is for search bar */}
                    {/* <div className="mr-1">
                      <input
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </div> */}
                    {/* <div className="mr-1 mx-1">
                      <button
                        className="btn btn-outline-success"
                        type="submit"
                      >
                        Search
                      </button>
                    </div> */} 
  </div>
      {/* This is for Toggle button to change from dark mode to light mode */}
                    {/* <div className="ms-auto ">
                    <div className=  {`form-check form-switch  text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle mode</label>
                      </div>
                    </div> */}
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