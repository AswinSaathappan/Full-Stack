import react from 'react';
import './App.css';
import {useState} from 'react';

function App() {
  const [count,setCount] = useState(0);

  function increment(){
    setCount(count+1);
  }

  function decrement(){
    setCount(count-1);
  }

  return(
    <div classNmae = "App">
      <h1>Counter:{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
