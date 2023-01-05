import React from 'react';

const Center = ({ children }) => {
  return (
    <div style={{    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'}}>
      {children}
    </div>
  )
};
export default Center;
