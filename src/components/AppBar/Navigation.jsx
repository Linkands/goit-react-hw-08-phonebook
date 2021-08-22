import React from 'react'
import { StyledNavLink } from './Navigation.styled'
import { useSelector } from 'react-redux'
import { getIsLoggedIn } from '../../redux/auth/auth-selectors'

function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn)
  return (
    <>
      <StyledNavLink exact to="/" className="link" activeClassName="activeLink">
        Home
      </StyledNavLink>
      {isLoggedIn && (
        <StyledNavLink
          to="/contacts"
          className="link"
          activeClassName="activeLink"
        >
          Contacts
        </StyledNavLink>
      )}
    </>
  )
}

export default Navigation
