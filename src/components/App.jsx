import React from 'react'
import './../css/App.css';
import Header from './Header.jsx';
import Banner from './Banner';
import CurrencyForm from "./CurrencyForm";


function App() {
  return (
    <div className="App">
      <Header />
      <div className="banner-container">
        <Banner />
      </div>
      <CurrencyForm />
    </div>
  );
}

export default App;
