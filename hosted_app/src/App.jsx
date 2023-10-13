import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const [meals, setMeals] = useState([]);
  const [hp, setHp] = useState(null);


  useEffect(() => {
    // go get the data, put it in state
    axios({
      method: "GET",
      url: "http://localhost:3000/meals"
    }).then((response) => {
      setMeals(response.data)
    });

  }, [])


  const handleClick = () => {
    // go get data from server
    axios("http://localhost:3000/points").then((response) => {
      // put data in state
      setHp(response.data.yourHealthScore)
    })
  };

  return (
    <>
      <h1>My Meals app</h1>
      {meals.map((meal) => {
        return (
          <div key={JSON.stringify(meal)}>
            <div>{meal.name}</div>
            <div>{meal.instructions}</div>
            
          </div>
        )
      })}

      <button onClick={handleClick}>Show Health Points</button>
      {hp && <div>{hp}</div>}
    </>
  )
}

export default App
