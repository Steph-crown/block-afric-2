import React from 'react'
import './../css/App.css';
import Header from './Header.jsx';
import Banner from './Banner'


function App() {
  return (
    <div className="App">
      <Header />
      <div className="banner-container">
        <Banner />
      </div>
      
    </div>
  );
}

export default App;
