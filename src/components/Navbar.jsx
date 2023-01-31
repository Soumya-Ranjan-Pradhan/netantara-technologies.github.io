import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return (
   <Nav>
    <div className="menuIcon">
      <ul className='navbar-list'>
        <li>
          <NavLink to="/" className="navbar-link">Home</NavLink>
        </li>

        <li>
        <NavLink to="https://www.nettantra.com/about/" className="navbar-link">AboutUs</NavLink>
        </li>

        <li>
          <NavLink to="https://www.nettantra.com/consulting/" className="navbar-link">Consulting</NavLink>
        </li>

        <li>
          <NavLink to="https://www.nettantra.com/tech-labs/" className="navbar-link">TechLabs</NavLink>
        </li>

        <li>
          <NavLink to="https://www.nettantra.com/research/" className="navbar-link">Research</NavLink>
        </li>

        <li>
          <NavLink to="https://www.nettantra.com/contact/" className="navbar-link">Contact</NavLink>
        </li>
      </ul>
    </div>
   </Nav>
  )
}

const Nav = styled.nav`
.navbar-list{
  display: flex;
  gap: 2.8rem;

  li{
    list-style: none;

    .navbar-link{
      &:link,
      &:visited{
        display: inline-block;
        text-decoration: none;
        font-size: 1.1rem;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.backText};
        transition: color 0.3s linear;
      }
      &:hover,
      &:active{
        color: ${({ theme }) => theme.colors.hover}
      }
    }
  }
}
`
export default Navbar