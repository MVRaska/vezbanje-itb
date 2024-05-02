import { useState } from "react";
import api from '../settings/api';

const deleteUserData = async id => {
    try {
        const response = api.delete(`/users/${id}`);
        return response;
    } 
    catch (e) {
        console.error('Error occured', e);
    }
}

const DeleteUsers = () => {
    const [id, setId] = useState('');
    
    const handleSubmit = async e => {
        e.preventDefault();

        // const response = api.delete(`/users/${id}`)
        // .then(resp => {console.log(resp);
        //     return resp;
        // });

        const response = await deleteUserData(id);
        console.log(response);
    }

    return <>
        <h4>delete users:</h4>
        <form onSubmit={handleSubmit}>
            <label>User id:
                <input tupe='text' onChange={e => setId(e.target.value)} />
            </label>
            <button tupe='submit'>delete</button>
        </form>
    </>
}

export default DeleteUsers;