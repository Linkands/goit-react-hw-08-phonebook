import React from 'react'
import { Wrapper, List, Item, DeleteButton, Header } from './Contacts.styles'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { visibleContacts } from '../../redux/selectors/contacts-selectors'
import * as contactsOperations from '../../redux/operations/contacts-operations'

function Contacts() {
  const dispatch = useDispatch()
  const contacts = useSelector(visibleContacts)

  const removeContact = (id) => {
    dispatch(contactsOperations.deleteContact(id))
  }

  return (
    <Wrapper>
      <Header>Contacts</Header>
      <List>
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            {name}: {number}
            <DeleteButton type="button" onClick={() => removeContact(id)}>
              Delete contact
            </DeleteButton>
          </Item>
        ))}
      </List>
    </Wrapper>
  )
}

Contacts.propTypes = {
  id: PropTypes.node,
  name: PropTypes.string,
  number: PropTypes.number,
}

export default Contacts
