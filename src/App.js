import React, { Component } from 'react';
import UserTable from './components/UserTable';
import usersData from './data/usersData.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Users</h2>
        </div>
        <UserTable users={usersData} />
      </div>
    );
  }
}

export default App;
