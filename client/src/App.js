import React, {useState} from 'react';
import './App.css';


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (   
    <div className="app">
      {!loggedIn ? 
      <div className="app__logIn">
        <div className="app__inputs">
          <input type="text" placeholder="Name..."/>
          <input type="text" placeholder="Room..."/>
        </div>
       
        <button>Enter Chat</button>
      </div>
      :  <h1> You are logged in</h1>}
    
    </div>
  );
}

export default App;
