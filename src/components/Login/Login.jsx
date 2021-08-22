import React, { useState } from 'react'
import { Header, SubmitButton, InputName, Wrapper } from './Login.styled'
import { useDispatch } from 'react-redux'
import * as authOperation from '../../redux/auth/auth-operations'

function Login() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'email':
        setEmail(value)
        break
      case 'password':
        setPassword(value)
        break
      default:
        break
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(authOperation.logIn({ email, password }))
    eraseInputs()
  }

  const eraseInputs = () => {
    setEmail('')
    setPassword('')
  }
  return (
    <Wrapper>
      <Header>Login</Header>
      <form onSubmit={handleSubmit}>
        <InputName>Email</InputName>
        <input
          type="email"
          name="email"
          required
          onChange={handleChange}
          value={email}
          placeholder="example@mail.com"
        />
        <InputName>Password</InputName>
        <input
          type="password"
          name="password"
          required
          onChange={handleChange}
          value={password}
        />
        <br />
        <SubmitButton type="submit">Log in</SubmitButton>
      </form>
    </Wrapper>
  )
}

export default Login
