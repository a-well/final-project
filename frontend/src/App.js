import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from 'routes/Main'
import Login from 'routes/Login'
import NotFound from 'routes/NotFound'

// import { Provider } from 'react-redux'
// import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import thoughts from 'reducers/thoughts'
// import user from 'reducers/user'

// const reducer = combineReducers({
//   user: user.reducer, 
//   thoughts: thoughts.reducer
// })

// const store = configureStore({reducer})

export const App = () => {
  return (
    // <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/' element={<Main />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    // </Provider>
  )
}
