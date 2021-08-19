import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import Phonebook from './components/Phonebook/Phonebook'
import Contacts from './components/Contacts/Contacts'
import Filter from './components/Filter/Filter'
import Navigation from './components/Navigation/Navigation'
import Container from './components/Container/Container'
import { useSelector } from 'react-redux'
import { contactsItems } from './redux/selectors/contacts-selectors'

function App() {
  const contacts = useSelector(contactsItems)

  return (
    <Container>
      <Navigation></Navigation>

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/register"></Route>
          <Route path="/login"></Route>
          <Route path="/contacts">
            <Phonebook></Phonebook>
            {contacts.length > 0 && (
              <>
                <Filter></Filter>
                <Contacts></Contacts>
              </>
            )}
          </Route>
        </Switch>
      </Suspense>
    </Container>
  )
}

export default App
