import {useState, useEffect} from 'react';

const InitialFunc = () => {
    console.log('run function');
    return 0;
}

const Counter = () => {
    const [counter, setCounter] = useState(InitialFunc());

    //renderuje se svaki put kad se desi promena, tj renderovanje - mount, update, unmount
    // useEffect(() => {
    //     console.log('render');
    // });
 
    //renderuje se samo jednom, kad se komponenta prvi put upisala u DOM
    useEffect(() => {
        console.log('component did mount');
    }, []);

    //renderuje se pri update state komponente
    useEffect(() => {
        console.log('component did update');
    }, [counter]);

    //kad se komponenta izbrise iz doma, cancelling network requet, ciscenje nekog state-a
    useEffect(() => {
        return () => {
            console.log('component did unmount');
        }
    }, []);

    //fragment - nekat React.Fragment
    return <>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <span>{counter}</span>
        <button onClick={() => setCounter(counter + 1)}>+</button>

    </>
}

export default Counter;