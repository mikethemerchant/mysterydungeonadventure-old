import './App.css';
import data from './data/monsters.json';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';


function App() {
  const [arrayIndex, setArrayIndex] = useState(0);
  const [character, setCharacter] = useState(JSON.parse(window.localStorage.getItem('character')) || {name: 'enter name', hitpoints: 30, attack: 5, defence: 15, damage: 4})
  const [monster, setMonster] = useState(data[arrayIndex])
  const [fightDescription, setFightDescription] = useState('')

  useEffect(() => {
    window.localStorage.setItem('character', JSON.stringify(character))
  }, [character])

  const nameChange = event => setCharacter({name: event.target.value, hitpoints: character.hitpoints, attack: character.attack, defence: character.defence, damage: character.damage} )
  const hitpointsChange = event => setCharacter({name: character.name, hitpoints: event.target.value, attack: character.attack, defence: character.defence, damage: character.damage} )
  const attackChange = event => setCharacter({name: character.name, hitpoints: character.hitpoints, attack: event.target.value, defence: character.defence, damage: character.damage} )
  const defenceChange = event => setCharacter({name: character.name, hitpoints: character.defence, attack: character.attack, defence: event.target.value, damage: character.damage} )
  const damageChange = event => setCharacter({name: character.name, hitpoints: character.defence, attack: character.attack, defence: character.defence, damage: event.target.value} )

  function onButttonClick() {
    const indexMax = data.length - 1;
    let randomInt = Math.floor((Math.random() * indexMax))+1;
    setArrayIndex(randomInt);
    setMonster(data[randomInt]);
  }

  function onAttackClick() {
    let result = ""; 
    result += " " + fight(character, monster);
    result += " " + fight(monster, character);
    setFightDescription(result);
  }
                  

  function fight(attacker, defender) {
    let attackValue = parseInt(attacker.attack) + Math.floor(Math.random() * 20);
    let attackDamage = parseInt(attacker.damage);

    let text = "";
    if (attacker.hitpoints <= 0) {
        text = `${attacker.name} is dead.`;
        return text;
    }
    if (defender.hitpoints <= 0) {
        text = `${defender.name} is dead.`;
        return text;
    }
    if (defender.hitpoints >= 1 && attacker.hitpoints >= 1) {
      if (attackValue > defender.defence) {
        defender.hitpoints -= attackDamage;
        if(defender.hitpoints <= 0) {
          text = `${attacker.name} hit ${defender.name} for ${attackDamage} damage!` + ` ${defender.name} is dead.`;
        } else { 
          text = `${attacker.name} hit ${defender.name} for ${attackDamage} damage!` + ` ${defender.name} has ${defender.hitpoints} hitpoints left!`;
        }
      } else {
          text = `${attacker.name} missed!`;
      }
    }

    return text;
  }

  const nameMonsterChange = event => setMonster({name: event.target.value, hitpoints: monster.hitpoints, attack: monster.attack, defence: monster.defence, damage: monster.damage} )
  const hitpointsMonsterChange = event => setMonster({name: monster.name, hitpoints: event.target.value, attack: monster.attack, defence: monster.defence, damage: monster.damage} )
  const attackMonsterChange = event => setMonster({name: monster.name, hitpoints: monster.hitpoints, attack: event.target.value, defence: monster.defence, damage: monster.damage} )
  const defenceMonsterChange = event => setMonster({name: monster.name, hitpoints: monster.defence, attack: monster.attack, defence: event.target.value, damage: monster.damage} )
  const damageMonsterChange = event => setMonster({name: monster.name, hitpoints: monster.defence, attack: monster.attack, defence: monster.defence, damage: event.target.value} )

  return (
    <>
      <Card
        style={{
          width: '50%'
        }}
      >
        <CardBody>
          <CardTitle tag="h5">
            {data[arrayIndex].name}
          </CardTitle>
          <CardText>
            {data[arrayIndex].description}
            {fightDescription}
          </CardText>
          <Button color="primary" onClick={onButttonClick}>Next</Button>
          <Button color="danger" onClick={onAttackClick}>Attack</Button>
        </CardBody>
        <img
          src={`images/${data[arrayIndex].image}`} 
          alt="display name not found" 
        />
      </Card>
      {/*
      <Image arrayIndex={arrayIndex} />
      <Description arrayIndex={arrayIndex} />
      <Button color="primary" onClick={onButttonClick}>Next</Button>
      <Button color="danger" onClick={onAttackClick}>Attack</Button>
      <div>
        <input type="text" id="name" value={character.name} onChange={nameChange} />
        <input type="text" id="hitpoints" value={character.hitpoints} onChange={hitpointsChange} />
        <input type="text" id="attack" value={character.attack} onChange={attackChange} />
        <input type="text" id="defence" value={character.defence} onChange={defenceChange} />
        <input type="text" id="damage" value={character.damage} onChange={damageChange} />
      </div>
      <div>
        <input type="text" id="name" value={monster.name} onChange={nameMonsterChange} />
        <input type="text" id="hitpoints" value={monster.hitpoints} onChange={hitpointsMonsterChange} />
        <input type="text" id="attack" value={monster.attack} onChange={attackMonsterChange} />
        <input type="text" id="defence" value={monster.defence} onChange={defenceMonsterChange} />
        <input type="text" id="damage" value={monster.damage} onChange={damageMonsterChange} />
      </div>
      <p>{fightDescription}</p>
       */}
    </>
  );
}

export default App;
