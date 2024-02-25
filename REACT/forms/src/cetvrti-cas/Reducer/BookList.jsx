import {useContext} from 'react';
import {BookContext} from './cetvrti-cas/BookContext';
import {BookListItem} from '';

const BookList = () => {
    const {books} = useContext(BookContext);

    return books.length ? (
        <div className = 'book-list'>
            {
                books.map(book => <BookListItem key={book.id} book={book} />)
            }
        </div>
    )
}
export default BookList;