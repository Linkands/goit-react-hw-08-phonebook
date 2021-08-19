import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import Phonebook from './components/Phonebook/Phonebook'
import Contacts from './components/Contacts/Contacts'
import Filter from './components/Filter/Filter'
import { useSelector } from 'react-redux'
import { contactsItems } from './redux/selectors/contacts-selectors'

function App() {
  const contacts = useSelector(contactsItems)

  return (
    <div>
      <Phonebook></Phonebook>
      {contacts.length > 0 && (
        <>
          <Filter></Filter>
          <Contacts></Contacts>
        </>
      )}
    </div>
  )
}

export default App
