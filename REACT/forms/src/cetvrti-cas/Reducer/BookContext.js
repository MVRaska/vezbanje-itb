import {createContext, useReducer} from 'react';
import {bookReducer} from './bookReducer';

export const BookContext = createContext();

const defaultBooks = [
    {title: 'Ubiti pticu rugalicu', id: 1, author: 'Harper Li'},
    {title: 'Nepodnosljiva lakoca react-a', id: 2, author: 'Nikola Komazec'},
    {title: 'Ko je maznuo moj sir', id: 3, author: 'Spenser Dzonson'},
    {title: 'Ispovest buntovnika', id: 4, author: 'Boris Njemcov'}
];

const BookContextProvider = ({children}) => {
    const [books, dispatch] = useReducer(bookReducer, defaultBooks);

    return <BookContext.Provider value={{books, dispatch}}>{children}</BookContext.Provider>
}

export default BookContextProvider;