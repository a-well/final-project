import React from 'react'
import { Col, Row, Button } from 'antd'

// import { useDispatch, useSelector } from 'react-redux'
// import thoughts from 'reducers/thoughts'
// import { API_URL } from 'utils/utils'
// import { useNavigate } from 'react-router-dom'
// import LogoutButton from './LogoutButton'

import SearchBox from 'components/SearchBox'
import RecentListings from 'components/RecentListings'
import HowDoesItWork from 'components/HowDoesItWork'
import Center from '../components/Center'

function Landing() {
  // const thoughtItems = useSelector((store) => store.thoughts.items)
  // const dispatch = useDispatch()
  // const accessToken = useSelector((store) => store.user.accessToken)

  // const navigate = useNavigate()

  // useEffect(() => {
  //     if (!accessToken) {
  //         navigate('/login')
  //     }
  // }, [accessToken])

  // useEffect(() => {

  //     const options = {
  //         method: 'GET',
  //         headers: {
  //             'Content-Type': 'application/json',
  //             'Authorization': accessToken
  //         }
  //     }
  //     fetch(API_URL('thoughts'), options)
  //         .then(res => res.json())
  //         .then(data => {
  //             console.log({data})
  //             if(data.success) {
  //                 console.log('success')
  //                 console.log(data.response)
  //                 dispatch(thoughts.actions.setItems(data.response))
  //                 dispatch(thoughts.actions.setError(null))
  //             } else {
  //                 dispatch(thoughts.actions.setItems([]))
  //                 dispatch(thoughts.actions.setError(data.response))
  //             }
  //         })
  // }, [])

  return (
    <>
      <h1>Landing (not signed in)</h1>

      <Row gutter={80}>
        <Col xs={24} md={12}>
          <p>have the pokemong go gods blessed you blah blah</p>
        </Col>
        <Col xs={24} md={12}>
          <h2>Search now to see whats out there!</h2>
          <SearchBox />
        </Col>
      </Row>

      <h2>Recent listings</h2>

      <Row gutter={80}>
        <Col xs={24} md={12}>
          <RecentListings type="wanted" />
          <Center>
            <h3>Got of these you're happy to part with?</h3>
            <Button type="primary">
              Sign up now and make someones day!
            </Button>
          </Center>
        </Col>
        <Col xs={24} md={12}>
          <RecentListings type="looking-for-a-new-home" />
          <Center>
            <h3>No luck finding your dream Pokemon?</h3>
            <Button type="primary">
              Become a member and post a wanted ad!
            </Button>
          </Center>
        </Col>
      </Row>

      <Center>
        <HowDoesItWork />
      </Center>
    </>
  )
}

export default Landing
