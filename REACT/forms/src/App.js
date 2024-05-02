
import './App.css';

/*
drugi cas - forms
// import Form from './components/Form.jsx';
// import Textarea from './components/Textarea.jsx';
// import Input from './components/Input.jsx';
// import Select from './components/Select.jsx';
// import Checkbox from './components/Checkbox.jsx';

import FormVezba from './components/Vezba';
*/

// __________________________________________

/*
treci cas - hooks
import Counter from './treci-cas-hooks-components/Counter';
import {useState} from 'react';
import Select from './treci-cas-hooks-components/Select';
import SongList from './treci-cas-hooks-components/SongList'; 
*/

// __________________________________________

// cetvrti cas - Context API
// import BookContextProvider from "./cetvrti-cas/BookContext";
// import BookList from  "./cetvrti-cas/BookList";
// import ThemeContextProvider from './cetvrti-cas/ThemeContext';
// import Navbar from './cetvrti-cas/Navbar';
// import AuthContextProvider from './cetvrti-cas/AuthContext'

// const Component1 = (props) => {
//   return <div>component1 {props.children}</div>
// }

// const Component2 = () => {
//   return <div>component2</div>
// }


// cetvrti cas - Reducer - useReduce hook
import CounterReducer from './cetvrti-cas/Reducer/CounterReducer';
import BookContextProvider from './cetvrti-cas/Reducer/BookContext';
import BookList from './cetvrti-cas/Reducer/BookList';
import BookForm from './cetvrti-cas/Reducer/BookForm';

// __________________________________________

function App() {

// __________________________________________

  /*
  treci cas - hooks
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true); 
  */

// __________________________________________

  return (  
    <div className="App">

    {/* __________________________________________ */}
      
    {/* 
      drugi cas - forme, folder components
       <Form />
      <Textarea />
      <Input />
      <Select />
      <Checkbox /> 

      <FormVezba />  //fajl Vezba.jsx u components
    */}
    
    {/* __________________________________________ */}
    
    {/* treci cas - hooks */}
       {/* uslovno renderovanje */}
      {/* {show && <Counter />}  */}
      {/* // {show && show2 ? <Counter /> : null}

      // <button onClick={() => setShow(!show)}>{show ? 'hide' : 'show'}</button>
      // <br />
      // <Select />

      // <SongList /> */}

      {/* __________________________________________ */}


    {/* cetvrti cas - Context API */}
      {/* <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
        </AuthContextProvider>  
      </ThemeContextProvider> */}

      {/* <Component1>
        <Component2 />
      </Component1> */}

    {/* cetvrti cas - Recducer - useReduce hook */}

      <CounterReducer />

      <BookContextProvider>
        <BookList />
        <BookForm />
      </BookContextProvider>

    </div>
  );
}

export default App;
