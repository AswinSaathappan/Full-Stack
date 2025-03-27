import react from 'react';
import './App.css';
import {useState} from 'react';
import Counter from './Counter';

function App()
{
  const [counter,setCounter] = useState(0);

  function increment()
  {
    setCounter(counter+1);
  }

  function decrement()
  {
    setCounter(counter-1)
  }

  return(
    <>
    <Counter counter={counter} increment={increment} decrement={decrement}/>
    </>
  )
}
export default App;
