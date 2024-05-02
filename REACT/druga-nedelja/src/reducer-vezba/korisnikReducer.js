import { ADD_USER, REMOVE_USER } from "./actions";

// action = {
//     type: 'string',
//     payload: {}
// };

//reducer ima svoj state i action kojim updejtuje svoj state
//updejt se vrsi preko dispatch({}) funkcije kojoj se prosledjuje objekat {tupe: 'string', payload: {}}


const korisnikReducer = (state, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case ADD_USER:
            const {name} = payload;
            return [...state, {name, id: Math.random()*100}];
        case REMOVE_USER:
            return [...state].filter(user => user.id !== payload.id);
        default: return state   
    }
}

export default korisnikReducer;