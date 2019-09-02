import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Characters from './components/characters'

const App = () => {
  const [char, setChar] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect(() => {
    axios.get(`https://swapi.co/api/people/`)
        .then(res => {
          console.log(res)
          setChar(res.data.results)
        })
        .catch(err => {
          console.log('Could not load data', err)
        })
  }, [])
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
        {char.map(person => {
          return < Characters
          key = {person.name}
           name = {person.name}
           mass = {person.mass}
           skinColor = {person.skin_color}
           height = {person.height}
           homeWorld = {person.homeworld}
          />
        })}
    </div>
  );
}

export default App;
