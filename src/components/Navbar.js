import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Navbar = () => {
  useEffect(() => {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    )
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          const target = el.dataset.target
          const $target = document.getElementById(target)

          el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }
  }, [])

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
          </Link>
          {/* Hamburger menu */}
          <div className="navbar-burger burger" data-target="navMenu">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenu" className="navbar-menu">
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
            <Link className="navbar-item" to="/contact/examples">
              Form Examples
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
