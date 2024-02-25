/*
Napraviti React komponentu za formu koja prikuplja osnovne podatke korisnika.
Kao što su ime, email, godine, pretplata na newsletter, pol i poruka.
Implementirati funkcionalnost za upravljanje state-om forme koristeći React-ov
Hook useState.
Omogućiti korisniku unos podataka putem input-a za unos teksta, input-a za unos
emaila, input-a za unos broja, checkboxa za pretplatu na newsletter, dropdown za
biranje pola, i input-a za unos poruke.
Omogućiti submit forme pomocu dugmeta "Pošalji".
Dodati funkcionalnost za prikupljanje podataka s forme i prikazivanje u konzoli.
*/

import {useState} from 'react';

const FormVezba = () => {
    const [person, setPerson] = useState({
        name: "",
        email: "",
        age: "",
        subscribe: false,
        gender: "",
      });
    
    const handleChange = e => {
        const { name, value, type, checked } = e.target;
    // const name = e.target.name
    // const value = e.target.value
    // const type = e.target.type
    // const checked = e.target.checked

    setPerson((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    return <form onSubmit={handleSubmit}>
        <h1>Podaci o korisniku</h1>
        
        <div>
            <label>Name:</label>
            <input type="text" name="name" value={person.name} onChange={handleChange} />
        </div>

        <div>
          <label>Email:</label>
          <input type="email" name="email" value={person.email} onChange={handleChange} />
        </div>

        <div>
          <label>Age:</label>
          <input type="number" name="age" value={person.age} onChange={handleChange} />
        </div>

        <div>
          <label>Subscribe to newsletters</label>
          <input type="checkbox" name="subscribe" checked={person.subscribe} onChange={handleChange} />
        </div>

        <div>
          <label>Gender</label>
          <select name="gender" value={person.gender} onChange={handleChange}>
            <option value="">Choose</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div>
          <label>Message:</label>
          <textarea name="message" value={person.message} onChange={handleChange} />
        </div>

        <button type="submit">Submit</button>

    </form>
}

export default FormVezba;