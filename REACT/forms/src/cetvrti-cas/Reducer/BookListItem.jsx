import {useContext} from 'react';
import {BookContext} from '';


const BookListItem = ({book}) => {
    const {books} = useContext(BookContext);

    return <>
    <li>
        <div>
            <div>{book.title}</div>
            <div>{book.author}</div>
            <span>X</span>
        </div>
    </li>
    </>
}

export const BookContext = createContext();

const defaultBooks = [
    {title: 'knjiga1', id: 1, author:'neko'},
    {title: 'knjiga2', id: 2, author:'neko'},
    {title: 'knjiga3', id: 3, author:'neko'}
];


