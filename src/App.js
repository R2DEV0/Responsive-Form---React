import React, {useState} from 'react';
import './App.css';
import UserForm from './components/Form';
import Results from './components/Results';


function App() {

  const[state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confpassword: ""
  });

  return (
    <div className="App">           
      <UserForm inputs={ state } setInputs={ setState }/>
      <Results data = { state }/>
    </div>
  );
}

export default App;
