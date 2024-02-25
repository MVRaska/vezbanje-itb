import {useContext} from 'react';
import {BookContext} from './BookContext';
import {ThemeContext} from './cetvrti-cas/ThemeContext';

const BookList = () => {
    const {books} = useContext(BookContext);
    const{isLightTheme, light, dark} = useContext(ThemeContext);

    const theme = isLightTheme ? light : dark;

    const {isAuth} = useContext(AuthContext);

    return <div style= {{color: theme.syntax, background: theme.bg}}>
        {
            isAuth ? (
        
        <ul>
            {books.map(book => <li key={book.id}>{book.title}</li>)};
        </ul>

        ) : (
            <div>You are not logged in. Please login to see the list</div>
        )}
    </div>
}

export default BookList;