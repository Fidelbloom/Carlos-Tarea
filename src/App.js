import React from 'react';
import './App.css';
import Card from './components/card/card'
import CardContainer from './components/cardContainer/cardContainer';
import Move from './components/button/button';


function App() {
  return (
    <div>
      <div>
        <CardContainer cards={
          [1,2,3,4,5,6,7,8].map( (number) => {
            return <Card number={number}/>
          })
        }/>
      </div>
      <Move>
        <button onClick={Move}>Hola</button>
      </Move>
    </div>
  );
}

export default App;
