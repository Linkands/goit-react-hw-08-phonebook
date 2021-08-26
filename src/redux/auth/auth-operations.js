import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { getUsername } from './auth-selectors'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization = ''
  },
}

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials)
      token.set(data.token)
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials)
      token.set(data.token)
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout')
    token.unset()
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState()
    const persistedToken = state.auth.token
    const name = useSelector(getUsername)

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue()
    }
    token.set(persistedToken)

    try {
      const { data } = await axios.get('/users/current')
      toast(`Welcome back, ${name}`)
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)
