import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from 'components/Layout'

import Landing from 'routes/Landing'

import Login from 'routes/Login'
import Signup from 'routes/Signup'
import ForgotPassword from 'routes/ForgotPassword'
import Home from 'routes/Home'
import Search from 'routes/Search'
import Profile from 'routes/Profile'
import MyListings from 'routes/MyListings'
import Listing from 'routes/Listing'
import PostListing from 'routes/PostListing'

import About from 'routes/About'
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

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/home" element={<Home />} />

          <Route path="/listing/*" element={<Listing />} />
          <Route path="/my-listings" element={<MyListings />} />
          <Route path="/post-listing" element={<PostListing />} />
          <Route path="/search" element={<Search />} />

          <Route path="/me" element={<Profile />} />

          <Route path="/about" element={<About />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
