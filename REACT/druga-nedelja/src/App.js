
import './App.css';

//pet cas - reducer-vezba

// import {useReducer, useState} from 'react';
// import korisnikReducer from './reducer-vezba/korisnikReducer';
// import {ADD_USER, REMOVE_USER} from './reducer-vezba/actions';

// const defaultUsers = [
//   {name: 'user1', id: 0}
// ];


//_________________________________________________

//pet cas - router-DOM

// import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
// import {Home, Users, About, UserItem} from './router-DOM/components'
// import UsersContextProvider from './router-DOM/context/UsersContext';

// ________________________________________________

//sesti cas - private-route

// import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
// import {useState} from 'react';

// import Home from './private-route/components/Home';
// import About from './private-route/components/About';
// import Profile from './private-route/components/Profile';
// import Settings from './private-route/components/Settings';
// import Login from './private-route/components/Login';
// import PrivateRoute from './private-route/components/PrivateRoute';
// import PageNotFound from './private-route/components/PageNotFound';


// ________________________________________________

//sesti cas - axios

import GetUsers from './axios/components/GetUsers';
import PostUsers from './axios/components/PostUsers';
import DeleteUsers from './axios/components/DeleteUsers';



function App() {

  // ______________________________________
  //peti cas - reducer-vezba

    // const [users, dispatchUser] = useReducer(korisnikReducer, defaultUsers);
    // const [inputState, setInputState] = useState('');

    // const handleSubmit = e => {
    //   e.preventDefault();
    //   dispatchUser({type: ADD_USER, payload: {name: inputState,}});
    // }

    // const handleRemove = (id) => {
    //   dispatchUser({
    //     type: REMOVE_USER,
    //     payload: {id}
    //   });
    // }



    // ______________________________________
  //sesti cas - private-route

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogin = () => {
  //   setIsLoggedIn(!isLoggedIn);
  // }

  return (
    <div className="App">

      {/* ______________________________________
      peti cas - reducer-vezba */}

      {/* <div>{users.map(user => <li key={user.id}>{user.name}<button onClick={() => handleRemove(user.id)}>remove</button></li>)}</div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={inputState} onChange={e => setInputState(e.target.value)} />
        <input type='submit' value='dodaj korisnika' />
      </form> */}


      {/* _____________________________________________ */}

      {/* peti cas - router-DOM */}

      {/* Router nam omogucava upotrebu rutiranja u celoj aplikaciji - wrapper */}
      {/* <UsersContextProvider>
        <Router>
          <div className='navbar'>  */}
            {/* Link komponenta za navigaciju ka razlicitim rutama
            Svaki link ima svoj 'to' prop koji definise putanju ka odgovarajucoj ruti */}
            {/* <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/users'>Users</Link>
          </div>  */}
            {/* Unutar Routes komponente definisu se pojedinacne rute */}

          {/* <Routes> */}
            {/* Svaka ruta ima svoj 'path' prop koji definise putanju ka kojoj ruta vodi,
            i 'element' prop koji sadrzi komponentu koja se renderuje kad se ruta poklopi sa trenutnom putanjom */}
            {/* <Route path='/about' element={<About />} />
            <Route path='/users' element={<Users />} />
            <Route path='users/:userId' element={<UserItem />} />
            <Route path='/' element={<Home />} />
          </Routes>            
        </Router>
      </UsersContextProvider> */}

      {/* _____________________________________________ */}

      {/* sesti cas - private-route */}

      {/* <Router>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/settings'>Settings</Link>
        <Link to='/login'>Login</Link>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<PrivateRoute isLoggedIn={isLoggedIn}><Profile /></PrivateRoute>} />
          <Route path='/settings' element={<PrivateRoute isLoggedIn={isLoggedIn}><Settings /></PrivateRoute>} />
          <Route path='/login' element={<Login onHandleLogin={handleLogin}/>} />
          <Route path='/' element={<Home />} />

          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router> */}



      {/* _____________________________________________ */}

      {/* sesti cas - axios */}

      <GetUsers />
      <PostUsers />
      <DeleteUsers />


    </div>
  );
}

// peti cas - router-DOM
//import UserItem from './router-DOM/components/UserItem';

export default App;
