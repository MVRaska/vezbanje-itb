import {useState} from 'react';

const Counter = () => {

    const [state, setState] = useState(0);

    const hendleDecrement = () => {
        setState(state - 1);
    };

    const formatState = () => {
        return state == 0 ? 'zero' : state;
    }; 

    return (
        <div>
            <h3>Welcome to Counter component</h3>
            <button onClick={hendleDecrement}>-</button>
            <span>{formatState()}</span>
            <button onClick={() => setState(state + 1)}>+</button>
        </div>
    );
}

export default Counter;