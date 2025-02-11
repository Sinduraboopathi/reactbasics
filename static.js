import React from 'react';

function StaticCounter() {
  const count = 5; 

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Static Counter</h1>
      <p>Current Count: {count}</p>
      <p>This counter value is static and does not change.</p>
    </div>
  );
}

export default StaticCounter;
