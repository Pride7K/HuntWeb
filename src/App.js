import React from 'react';
import Header from './components/Header/index'
import "./style.css"
import Routes from './router'

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Routes/>
    </div>
  );
}

export default App;
