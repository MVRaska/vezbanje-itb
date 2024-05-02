import {useContext} from 'react';
import {BookContext} from './BookContext';


const BookListItem = ({book}) => {
    const {dispatch} = useContext(BookContext);

    return <li onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id})}>
            <div>
                <div className='title'>{book.title}</div>
                <div className='author'>{book.author}</div> 
            </div>
            <span className='remove-btn'>X</span>
        </li>
}

export default BookListItem;
