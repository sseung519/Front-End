import React from 'react';
import {useState} from 'react';

const Lighter = () => {
  const [light, setLight] = useState('OFF');
  return (
    <div>
      <h1>{light}</h1>
      <button onClick={() => {
        setLight(light === 'ON' ? 'OFF' : 'ON')
      }}>Change Light</button>
    </div>
  );
};

export default Lighter;