import axios from 'axios';

export default axios.create({
    //dev test uat prod(uction)
    
    baseURL: 'https://jsonplaceholder.typicode.com/'

    /*
    headers: {
        'Authorization': 'Bearer token123',
        'Contant-Type': 'application/json'
    }
    */
})