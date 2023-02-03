import React from 'react'

const Center = ({ children }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
  >
    <div>
      {children}
    </div>
  </div>
)
export default Center;
