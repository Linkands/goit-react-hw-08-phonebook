import React, { useState, useEffect } from 'react'
import { Header, SubmitButton, InputName, Wrapper } from './Phonebook.styles'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import * as contactsOperations from '../../redux/operations/contacts-operations'
import { contactsItems } from '../../redux/selectors/contacts-selectors'

function Phonebook() {
  const dispatch = useDispatch()
  const contacts = useSelector(contactsItems)

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts())
  }, [dispatch])

  const handleChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'name':
        setName(value)
        break
      case 'number':
        setNumber(value)
        break

      default:
        break
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const randomId = uuidv4()
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      return alert(`${name} already exists in your contacts`)
    }
    dispatch(contactsOperations.addContact({ id: randomId, name, number }))
    eraseInputs()
  }

  const eraseInputs = () => {
    setName('')
    setNumber('')
  }

  return (
    <Wrapper>
      <Header></Header>
      <form onSubmit={handleSubmit}>
        <InputName>Name</InputName>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
          value={name}
        />
        <InputName>Number</InputName>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
          value={number}
        />
        <br />
        <SubmitButton type="submit">Add contact</SubmitButton>
      </form>
    </Wrapper>
  )
}

Phonebook.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  number: PropTypes.node,
}

export default Phonebook
