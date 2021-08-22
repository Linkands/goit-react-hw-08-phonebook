import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsername } from '../../redux/auth/auth-selectors'
import { Wrapper, SubmitButton, InputName } from './UserMenu.styled'
import Avatar from 'react-avatar'
import { logOut } from '../../redux/auth/auth-operations.js'

function UserMenu() {
  const dispatch = useDispatch()
  const name = useSelector(getUsername)

  return (
    <Wrapper>
      <InputName>Welcome, {name}!</InputName>
      <Avatar round size="30" src="https://picsum.photos/200/300" />
      <SubmitButton onClick={() => dispatch(logOut())}>Logout</SubmitButton>
    </Wrapper>
  )
}

export default UserMenu
