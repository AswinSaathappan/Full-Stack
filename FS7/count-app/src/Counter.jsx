import react from 'react';
function Counter(props){
    return(
        <div className = "App">
            <h1>Counter:{props.counter}</h1>
            <button onClick={props.increment}>Increment</button>
            <button onClick={props.decrement}>Decrement</button>
        </div>
    );
}
export default Counter;
