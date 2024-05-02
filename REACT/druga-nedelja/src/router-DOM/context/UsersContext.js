import { createContext, useReducer } from "react";
import {usersReducer} from '../reducer/usersReducer';

export const UsersContext = createContext();

const UsersContextProvider = ({children}) => {
    const[users,dispatch] = useReducer(usersReducer, []);

    return <UsersContext.Provider value={{users, dispatch}}>{children}</UsersContext.Provider>
}

export default UsersContextProvider;
