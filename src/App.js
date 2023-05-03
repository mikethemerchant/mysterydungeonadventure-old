import logo from './logo.svg';
import './App.css';
import Image from './components/Image.js'
import { useState, useEffect } from 'react';
import rooms from './data/rooms.json';
import Description from './components/Description';

function App() {
  const [arrayIndex, setArrayIndex] = useState(0);

  function onButttonClick() {
    const indexMax = rooms.length - 1;
    let randomInt = Math.floor((Math.random() * indexMax))+1;
    
    setArrayIndex(randomInt);
  }

  return (
    <>
      <p>We got images</p>
      <Image arrayIndex={arrayIndex} />
      <Description arrayIndex={arrayIndex} />
      <button onClick={onButttonClick}>Next</button>
    </>
  );
}

export default App;
