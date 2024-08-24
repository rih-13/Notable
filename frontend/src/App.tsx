import React, { useState }  from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { click } from '@testing-library/user-event/dist/click';

function App() {

  const [clickCount, setClickCount] = useState(0);



  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Notable
        </p>
        <Button onClick={ () => setClickCount(clickCount + 1) }>  Clikced {clickCount} times </Button>
      </header>
    </div>
  );
}

export default App;
