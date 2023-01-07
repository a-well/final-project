import React from 'react';

function Center({ children }) {
  return (
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
  );
}
export default Center;
