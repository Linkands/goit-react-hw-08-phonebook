import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

export const StyledNavLink = styled(NavLink)`
  &.link {
    text-decoration: none;
    color: black;
    margin: 10px;
    text-shadow: 1px 1px grey;
  }
  &.activeLink {
    color: #9db17c;
    font-size: 20px;
  }
`
export const StyledNav = styled.nav`
  /* text-align: center; */
  padding: 10px;
  border-bottom: solid 1px black;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
