import './App.css';
import Card from './components/card/card'
import CardContainer from './components/cardContainer/cardContainer';

function App() {
  return (
    <div className="border-2 h-screen">
      <div className="h-1/6">
        <CardContainer cards={
          [1,2,3,4,5,6,7,8].map( (number) => {
            return <Card number={number}/>
          })
        }/>
      </div>
      
    </div>
  );
}

export default App;
