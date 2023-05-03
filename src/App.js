import './App.css';
import rooms from './data/rooms.json';
import Image from './components/Image.js'
import Description from './components/Description';
import { useState, useEffect } from 'react';

function App() {
  const [arrayIndex, setArrayIndex] = useState(0);

  const [character, setCharacter] = useState(JSON.parse(window.localStorage.getItem('character')) || {desc: 'enter name', hitpoints: 10, attack: 1, defence: 10})

  useEffect(() => {
      window.localStorage.setItem('character', JSON.stringify(character))
  }, [character])

  const nameChange = event => setCharacter({desc: event.target.value, hitpoints: character.hitpoints, attack: character.attack, defence: character.defence} )
  const hitpointsChange = event => setCharacter({desc: character.desc, hitpoints: event.target.value, attack: character.attack, defence: character.defence} )
  const attackChange = event => setCharacter({desc: character.desc, hitpoints: character.hitpoints, attack: event.target.value, defence: character.defence} )
  const defenceChange = event => setCharacter({desc: character.desc, hitpoints: character.defence, attack: character.attack, defence: event.target.value} )

  function onButttonClick() {
    const indexMax = rooms.length - 1;
    let randomInt = Math.floor((Math.random() * indexMax))+1;
    setArrayIndex(randomInt);
  }


  return (
    <>
      <Image arrayIndex={arrayIndex} />
      <Description arrayIndex={arrayIndex} />
      <button onClick={onButttonClick}>Next</button>
      <div>
        <h3>Character:</h3>
        <input type="text" id="desc" value={character.desc} onChange={nameChange} />
        <input type="text" id="hitpoints" value={character.hitpoints} onChange={hitpointsChange} />
        <input type="text" id="attack" value={character.attack} onChange={attackChange} />
        <input type="text" id="defence" value={character.defence} onChange={defenceChange} />
      </div>

    </>
  );
}

export default App;
