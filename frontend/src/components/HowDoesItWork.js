import React from 'react'

import { Button } from 'antd'
import { Link } from 'react-router-dom'



const HowDoesItWork = () => (
  <div>
    <h2>How does it work?</h2>
    <p>Like this</p>
    
    <Link to="/signup">
      <Button type="primary">
          Sweet, let's go!
      </Button>
    </Link>
  </div>
)

export default HowDoesItWork