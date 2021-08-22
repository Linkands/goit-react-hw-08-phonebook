import React from 'react'
import { StyledNavLink } from './Navigation.styled'

function AuthNav() {
  return (
    <>
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
    </>
  )
}

export default AuthNav
