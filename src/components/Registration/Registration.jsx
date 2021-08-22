import React, { useState } from 'react'
import { Header, SubmitButton, InputName, Wrapper } from './Registration.styled'
import { useDispatch } from 'react-redux'
import * as authOperation from '../../redux/auth/auth-operations'

function Registration() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'name':
        setName(value)
        break
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
    dispatch(authOperation.register({ name, email, password }))
    eraseInputs()
  }

  const eraseInputs = () => {
    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <Wrapper>
      <Header>Registration</Header>
      <form onSubmit={handleSubmit}>
        <InputName>Name</InputName>
        <input
          type="text"
          name="name"
          required
          onChange={handleChange}
          value={name}
        />
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
        <SubmitButton type="submit">Register</SubmitButton>
      </form>
    </Wrapper>
  )
}

export default Registration
