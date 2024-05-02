import{useReducer} from 'react';
//useReducer je alternativa useState hook-a
//koristi se za kompleksnije state-ove koji se mogu modifikovati koristeci reducer funkciju

const initialState = 0;

//reducer je funkcija koja prima trenutni state i akciju, i na osnovu akcije vraca novi state
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return 0;

        default:
            break;
    }
}

const CounterReducer = () => {
    // useReducer vraca trenutni state counter-a i funkciju dispatch koja se koristi za slanje akcije reducer funk
    const [count, dispatch] = useReducer(reducer, initialState);

    return <>
        {count}
        <button onClick={() => dispatch('decrement')}>decrement</button>
        <button onClick={() => dispatch('reset')}>reset</button>
        <button onClick={() => dispatch('increment')}>increment</button>
    </>
}

export default CounterReducer;