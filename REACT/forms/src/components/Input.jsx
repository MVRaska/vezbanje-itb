import {useState} from 'react';

const Input = () => {
    const [person, setPerson] = useState({
        name: '',
        age: '',
        errorMsg: ''
    });

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        // console.log(name, value);

        // setPerson(prevState => ({... prevState, [name]: value}));

        let errorMSG = '';
        if(name == 'age') {
            if(value != '' && !Number(value)) {
                errorMSG = 'You must enter number';
            }
        }

        setPerson(prevState => ({...prevState,
            [name]: value,
            errorMSG  // isto kao: errorMsg: errorMsg
        }))
    }

    

    return <form>
        <h1>Hello, {person.name}</h1>
        <h2>Your age is {person.age}</h2>

        <p>Enter your name</p>
        <input type='text' name='name' onChange={handleChange} />

        <p>Enter your age</p>
        <input type='text' name='age' onChange={handleChange} />

        <h5>{person.errorMsg}</h5>

    </form>
}

export default Input;