/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const user = createSlice({
  name: 'user',
  initialState: {
    user: null,
    accessToken: null,
  },
  reducers: {
    setUser: (store, action) => {
      store.user = action.payload
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload
    },
  },
})

export default user
