import React, { Suspense, useEffect } from 'react'
import { Switch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Phonebook from './components/Phonebook/Phonebook'
import Contacts from './components/Contacts/Contacts'
import Filter from './components/Filter/Filter'
import Container from './components/Container/Container'
import Registration from './components/Registration/Registration'
import Login from './components/Login/Login'
import AppBar from './components/AppBar/AppBar'
import { contactsItems } from './redux/selectors/contacts-selectors'
import { fetchCurrentUser } from './redux/auth/auth-operations'
import { getIsFetchingCurrentUser } from './redux/auth/auth-selectors'

import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'

function App() {
  const contacts = useSelector(contactsItems)
  const dispatch = useDispatch()
  const refreshingCurrentUser = useSelector(getIsFetchingCurrentUser)

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch])

  return (
    <Container>
      {!refreshingCurrentUser && (
        <>
          <AppBar />

          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <PublicRoute exact path="/" restricted>
                Welcome to Phonebook app! Phonebook app allows you to save your
                contact names, phone numbers and get them any time by logging in
                to your account.
              </PublicRoute>

              <PublicRoute path="/register" restricted>
                <Registration />
              </PublicRoute>

              <PublicRoute path="/login" redirectTo="/contacts" restricted>
                <Login />
              </PublicRoute>

              <PrivateRoute path="/contacts" redirectTo="/login">
                <Phonebook />
                {contacts.length > 0 && (
                  <>
                    <Filter />
                    <Contacts />
                  </>
                )}
              </PrivateRoute>
            </Switch>
          </Suspense>
        </>
      )}
    </Container>
  )
}

export default App
