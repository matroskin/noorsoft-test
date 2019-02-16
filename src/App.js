import React, { Component } from 'react';
import Header from './components/Header';
import UserTable from './components/UserTable';
import AddUser from './components/AddUser';
import usersData from './data/usersData.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: usersData
    };
  }

  render() {
    return (
      <div className="main">
        <Header title='Users' />

        <UserTable users={this.state.users} />

        <AddUser
          id={this.state.users.length}
          onSubmit={submission =>
            this.setState({
              users: [...this.state.users, submission]
            })
          }
        />
      </div>
    );
  }
}

export default App;
