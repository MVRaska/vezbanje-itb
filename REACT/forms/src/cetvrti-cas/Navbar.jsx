import {useState } from 'react';
import {ThemeContext} from 'cetvrti-cas/ThemeContext';
import { AuthContext } from './cetvrti-cas/AuthContext';}

const Navbar = () => {
    const {togglrTheme} = useContext(ThemeContext);
    const {isAuth, toggleAuth} = useContext(AuthContext);
    return <div>
        <button onClick={toogleTheme}>toggle theme</button>
        <button onClick={}>toggle theme</button>
    </div>
}

export default Navbar;