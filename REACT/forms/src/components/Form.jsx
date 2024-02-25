import {useState} from 'react';

const Form = () => {
    const [name, setName] = useState('');

    const handleChange = event => {
        setName(event.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        alert(`Your name is ${name}`);
    }

    return <form onSubmit={handleSubmit}>
        <h1>Hello {name}</h1>
        <p>Enter your name</p>
        {/* <input type='text' onChange={handleChange}></input> */}
        <input type='text' onChange={e => handleChange(e)} />
        <input type='submit' value='Submit' />

    </form>
}

export default Form;