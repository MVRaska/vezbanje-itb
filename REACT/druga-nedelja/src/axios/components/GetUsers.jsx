import axios from 'axios';
import { useState, useEffect } from 'react';
import api from '../settings/api';

const GetUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        api.get('/users')
        .then(res => {
            console.log(res);
            setUsers(res.data);
        });

        api.get('/posts')
        .then(res => console.log(res))

    }, []);

    return <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
}

export default GetUsers;