import {useContext} from 'react';
import {BookContext} from './BookContext';
import BookListItem from './BookListItem';

const BookList = () => {
    const {books} = useContext(BookContext);

    return books.length ? (
            <div className='book-list'>
                {books.map(book => <BookListItem key={book.id} book={book} />)}
            </div>)
            : (<div className='empty'>No more books to read</div>)
}
export default BookList;