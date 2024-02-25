import {useState} from 'react';

const Select = () => {
const [value, setValue] = useState('Volvo');

const handleChange = e => {
    setValue(e.target.value);
}

    return <form>
        <h3>Your favorite car is: {value}</h3>
        <select value={value} onChange={handleChange}>
            <option value='Toyota'>Toyota</option>
            <option value='Volvo'>Volvo</option>
            <option value='Nissan'>Nissan</option>
        </select>
    </form>
}

export default Select;