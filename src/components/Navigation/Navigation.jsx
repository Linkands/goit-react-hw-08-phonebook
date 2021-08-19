import React from 'react'
import { StyledNav, StyledNavLink } from './Navigation.styled'

function Navigation() {
  return (
    <StyledNav>
      <StyledNavLink exact to="/" className="link" activeClassName="activeLink">
        Home
      </StyledNavLink>
      <StyledNavLink
        to="/contacts"
        className="link"
        activeClassName="activeLink"
      >
        Contacts
      </StyledNavLink>
      <StyledNavLink to="/login" className="link" activeClassName="activeLink">
        Login
      </StyledNavLink>
      <StyledNavLink
        to="/register"
        className="link"
        activeClassName="activeLink"
      >
        Register
      </StyledNavLink>
    </StyledNav>
  )
}

export default Navigation
