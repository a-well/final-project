import React from 'react'
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom'

import Layout from 'components/Layout'

import Login from 'routes/Login'
import Signup from 'routes/Signup'
import Home from 'routes/Home'
import BrowseListings from 'routes/BrowseListings'
import MyProfile from 'routes/MyProfile'
import Listing from 'routes/Listing'
import PostListing from 'routes/PostListing'
import ProfilePage from 'routes/ProfilePage'
import EditProfile from 'routes/EditProfile'

import NotFound from 'routes/NotFound'

import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import user from 'reducers/user'
import ErrorBoundary from 'antd/es/alert/ErrorBoundary'
import { ConfigProvider } from 'antd'
import ScrollToTop from 'components/ScrollToTop'

const reducer = combineReducers({
  user: user.reducer,
})

const preloadedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {}

const store = configureStore({ reducer, preloadedState })
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

const theme = {
  token: {
    fontSize: 14,
    fontSizeLG: 16,
    fontSizeHeading1: 40,
    fontSizeHeading2: 26,
    fontSizeHeading3: 20,
    lineHeight: 1.5,
  },
}

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <>
            <ScrollToTop />
            <ConfigProvider theme={theme}>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />

                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />

                  <Route path="/listing/:id" element={<Listing />} />
                  <Route path="/post-listing" element={<PostListing />} />
                  <Route path="/browse" element={<BrowseListings />} />

                  <Route path="/me" element={<MyProfile />} />
                  <Route path="/users/:username" element={<ProfilePage />} />
                  <Route path="/edit-profile" element={<EditProfile />} />

                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            </ConfigProvider>
          </>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  )
}

export default App
