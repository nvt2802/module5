import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import './style_layout.css';

export default function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg shadow-sm" id="nav-page">
    <div className="container-fluid">
        <a className="navbar-brand text-dark" href="/#">Furama Resort</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active text-dark" aria-current="page" href="/#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="/#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-dark" href="/#" role="button" data-bs-toggle="dropdown"
                       aria-expanded="false">
                        Dropdown
                    </a>
                    <ul className="dropdown-menu border-dark border-2">
                        <li><a className="dropdown-item" href="/#">Action</a></li>
                        <li><a className="dropdown-item" href="/#">Another action</a></li>
                        <li>
                            <hr className="dropdown-divider "/>
                        </li>
                        <li><a className="dropdown-item" href="/#">Something else here</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true" href="/#">Disabled</a>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2 border-dark border-2 form-radius" id="inputSearch" type="search"
                       placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-dark border-2 form-radius" id="btnSearch" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>
</div>
  )
}
