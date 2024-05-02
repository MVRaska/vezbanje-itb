import {useContext} from 'react';
import {ThemeContext} from './ThemeContext';
import { AuthContext } from './AuthContext';

const Navbar = () => {
    const {toggleTheme} = useContext(ThemeContext);
    const {isAuth, toggleAuth} = useContext(AuthContext);
    
    return <div>
        <button onClick={toggleTheme}>toggle theme</button>
        <button onClick={toggleAuth}>{isAuth ? 'logout' : 'login'}</button>
    </div>
}

export default Navbar;