import { useState } from 'react';
import './App.css'

const App = () => {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952',
        id:1
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/771796',
        id: 2
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/24f355',
        id: 3
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/d32776',
        id: 4
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4',
        id:5
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2',
        id:6
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2',
        id:7
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc',
        id:8
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537',
        id:9
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e',
        id:10
      },
    ]    
  )
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)

  const handleAddFighter = (fighter) => {
    const price = fighter.price
    console.log(price)
    console.log(money)
    if (money >= price){
      const newFighterArray = [...team, fighter]
      setTeam(newFighterArray)
      const newMoney = money-price
      setMoney(newMoney)
      const newStrength = totalStrength + fighter.strength
      const newAgility = totalAgility + fighter.agility
      setTotalStrength(newStrength)
      setTotalAgility(newAgility)
    } else {
      alert('Not enough money')
    }
  };

  const handleRemoveFighter = (fighter) => {
    const fighterId = fighter.id
    const fighterPrice = fighter.price
    setTeam(team => team.filter(eachFighter => eachFighter.id !== fighterId));
    const newMoney = money+fighterPrice
    setMoney(newMoney)
    const newStrength = totalStrength - fighter.strength
    const newAgility = totalAgility - fighter.agility
    setTotalStrength(newStrength)
    setTotalAgility(newAgility)
  }

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <h2>Team:</h2>
      <h3>Team Strength: {totalStrength}</h3>
      <h3>Team Agility: {totalAgility}</h3>
      <ul>
      {team.map((thisFighter, idx) => (
          <li key={idx}>
              <li><img src={thisFighter.img} /></li>
              <li>Name: {thisFighter.name}</li>
              <li>Strength: {thisFighter.strength}</li> 
              <li>Agility: {thisFighter.agility}</li>
              <button onClick={() => handleRemoveFighter(thisFighter)}>Fire</button>
          </li>
        ))}
      </ul>
      <ul>
        {zombieFighters.map((fighter, idx) => (
          <li key={idx}>
              <li><img src={fighter.img} /></li>
              <li>Name: {fighter.name}</li>
              <li>Price: {fighter.price}</li> 
              <li>Strength: {fighter.strength}</li> 
              <li>Agility: {fighter.agility}</li> 
            <button onClick={() => handleAddFighter(fighter)}>Hire</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App