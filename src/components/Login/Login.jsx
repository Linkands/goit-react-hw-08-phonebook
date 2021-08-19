import React from 'react'
import { Header, SubmitButton, InputName, Wrapper } from './Login.styled'

function Login() {
  return (
    <Wrapper>
      <Header>Login</Header>
      <form onSubmit={''}>
        <InputName>Email</InputName>
        <input
          type="email"
          name="email"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={''}
          value={''}
        />
        <InputName>Password</InputName>
        <input
          type="password"
          name="password"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={''}
          value={''}
        />
        <br />
        <SubmitButton type="submit">Log in</SubmitButton>
      </form>
    </Wrapper>
  )
}

export default Login
