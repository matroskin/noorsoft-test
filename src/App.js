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

    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  nextId() {
    this._nextId = this._nextId || this.state.users[this.state.users.length - 1].id + 1;
    return this._nextId++;
  }

  handleAdd(age, name, email) {
    let user = {
      id: this.nextId(),
      age,
      name,
      email
    }

    let users = [...this.state.users, user];

    this.setState({ users });
  }

  handleEdit(id, name, age, email) {
    let users = this.state.users.map(user => {
      if (user.id === id) {
        user.name = name;
        user.age = age;
        user.email = email;
      }

      return user;
    });

    this.setState({ users });
  }

  handleDelete(id) {
    let users = this.state.users.filter(user => user.id !== id);

    this.setState({ users });
  }

  render() {
    return (
      <div className="main">
        <Header title='Users' />

        <UserTable
          users={this.state.users}
          onEdit={this.handleEdit}
          onDelete={this.handleDelete}
        />

        <AddUser
          onAdd={this.handleAdd}
        />
      </div>
    );
  }
}

export default App;
