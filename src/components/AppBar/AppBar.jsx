import React from 'react'
import Navigation from './Navigation'
import AuthNav from './AuthNav'
import UserMenu from './UserMenu'
import { StyledNav } from './Navigation.styled'
import { useSelector } from 'react-redux'
import { getIsLoggedIn } from '../../redux/auth/auth-selectors'

function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn)
  return (
    <StyledNav>
      <Navigation></Navigation>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </StyledNav>
  )
}

export default AppBar
