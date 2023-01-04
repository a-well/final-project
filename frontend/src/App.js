import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from 'components/Layout'

import Landing from 'routes/Landing'

import Login from 'routes/Login'
import Signup from 'routes/Signup'
import Home from 'routes/Home'
import Search from 'routes/Search'
import Profile from 'routes/Profile'

import Listing from 'routes/Listing'
import PostListing from 'routes/PostListing'

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
        <Layout>
          <Routes>

            <Route path='/' element={<Landing />}></Route>

            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>

            <Route path='/home' element={<Home />}></Route>

            <Route path='/listing' element={<Listing />}></Route>
            <Route path='/post-listing' element={<PostListing />}></Route>
            <Route path='/search' element={<Search />}></Route>

            <Route path='/me' element={<Profile />}></Route>
            {/* Add more routes here */}

            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    // </Provider>
  )
}
