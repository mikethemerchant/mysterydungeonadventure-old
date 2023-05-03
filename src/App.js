import logo from './logo.svg';
import './App.css';
import Image from './components/Image.js'
import { useState, useEffect } from 'react';
import rooms from './data/rooms.json';

function App() {
  const [arrayIndex, setArrayIndex] = useState(0);

  function onButttonClick() {
    const indexMax = rooms.length - 1;
    let randomInt = Math.floor((Math.random() * indexMax))+1;
    
    console.log(randomInt);
    setArrayIndex(randomInt);
  }

  return (
    <>
      <p>We got images</p>
      <Image arrayIndex={arrayIndex} />
      <button onClick={onButttonClick}>changeImage</button>
    </>
  );
}

export default App;
