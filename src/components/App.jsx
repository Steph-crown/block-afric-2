import React, { Component } from 'react';
import './../css/App.css';
import Header from './Header.jsx';
import Home from './Home'
import Menu from './Menu';
import Activity from './Activity';
import Wallet from './Wallet';
import Market from './Market';
import Earth from './Earth'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMenu: "Home"
    }
  }
  switchMenu = (newMenu) => {
    this.setState({
      currentMenu: newMenu
    })
  }
  strToObjMap = {
    "Home": Home,
    "Activity": Activity,
    "Wallet": Wallet,
    "Market": Market,
    "Earth": Earth
  }
  render() {
    const NewMenu = this.strToObjMap[this.state.currentMenu]
    return (
      <div className="App">
        {console.log(this.state.currentMenu)}
        <Header />
        <NewMenu />
        <Menu handleMenuSwitch={this.switchMenu} />
      </div>
    );
  }
}

export default App;






