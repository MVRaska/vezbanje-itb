import {useEffect, useContext} from 'react';
import {UsersContext} from '../context/UsersContext';
import {Link} from 'react-router-dom';

const Users = () => {

    const{users, dispatch} = useContext(UsersContext);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => dispatch({type: 'SET_ALL_USERS', payload: json})) 
    }, []);
    

    return <>
        <h1>Users</h1>
        {users.map(user => <p key={user.id}>#{user.id}
        <Link to={`/users/${user.id}`}>{user.name}</Link></p>)}
    </>
}
export default Users;