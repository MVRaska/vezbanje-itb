import {createContext, useState } from 'react';

//pravimo react context koristeci createContext iz react biblioteke
export const BookContext = createContext();


// const BookContextProvider = (props) => {
//     return <BookContext.Provider>{props.children}</BookContext.Provider>
// }  //props.children omogucava da svaka komponenta ugnjezdena u <BookContext.Provider> moze da pristupi context-u koji je je definisan u BookContext-u

const BookContextProvider = ({children}) => {
const [books, setBooks] = useState([
    {title: 'Ubiti pticu rugalicu', id: 1},
    {title: 'Nepodnosljiva lakoca react-a', id: 2},
    {title: 'Ko je maznuo moj sir', id: 3},
]);

    return <BookContext.Provider value={{books}}>{children}</BookContext.Provider>
}

export default BookContextProvider;