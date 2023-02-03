import React from 'react'
import { Link } from 'react-router-dom'

const Logotype = () => (

  <Link
    to="/home"
    title="Go to home page"
    style={{
      paddingLeft: '16px', color: 'white', fontSize: 24, fontWeight: 'bold',
    }}
  >
    PokeYAY
  </Link>

)
export default Logotype
