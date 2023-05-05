import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
      <nav className="navbar fixed-top  navbar-expand-lg bg-dark" data-bs-theme="dark" >
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
    <img src="https://tse2.mm.bing.net/th?id=OIP.yGNxHPtepYc7qk5OQFxGgQHaHZ&pid=Api&P=0" alt="CompanyName" width="70" height="40"/>
    TexAco
  </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" class="btn btn-outline-primary mx-2" aria-current="page" href="/Home">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link active" class="btn btn-outline-primary mx-2" aria-current="page" href="/Webdevlopment">Webdevlopment</a>
        </li> */}
        <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle"  href="/Service" role="button" class="btn btn-outline-primary mx-2" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/Webdesign">Webdesign</a></li>
            <li><a className="dropdown-item" href="/Digitalmarketing">Digital Marketing</a></li>
            </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link active"class="btn btn-outline-primary mx-2" aria-current="page" to="/Pakages">Packages</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link active" class="btn btn-outline-primary mx-2" aria-current="page" href="/Portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" class="btn btn-outline-primary mx-2" aria-current="page" href="/About">Aboutus</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}
