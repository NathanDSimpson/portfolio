import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom'


import NavBar from './Components/NavBar'
import router from './router'

function App() {
  return (
    <HashRouter>
      <div className="App">
      <NavBar/>
        <div>
          {router}
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
