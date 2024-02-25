import {useState} from 'react';
import CounterListItem from './CounterListItem';


const CounterList = () => {

    const[counters, setCounters] = useState([
        {id: 1, value: 0},
        {id: 2, value: 5},
        {id: 3, value: 9},
    ]);

    return (
        <div>
            <h1>Counter List:</h1>
            <ul>
                {/* {{counters.map(counter => {
                    <li key={counter.id}>{counter.value}</li> }
                })} */}

                {counters.map(counter => {
                    return (
                        <div key={counter.id}>
                            {''}
                            id: {counter.id}: <CounterListItem counter={counter} />
                        </div>
                    );
                })}
            </ul>
        </div>
    );
}

export default CounterList;

/*
.map() - vraca transformisani niz
.forEach() - simply iterates/ ide kroz niz i ne vraca nista 
{renderItems}
*/

