import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import UserTable from './components/UserTable';
import AddUser from './components/AddUser';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/records')
      .then(response => response.data)
      .then(users => this.setState({ users }))
      .catch(error => console.error(error.message));
  }

  handleAdd(age, name, email) {
    axios.post('/api/records', { age, name, email })
      .then(response => response.data)
      .then(user => {
        let users = [...this.state.users, user];

        this.setState({ users });
      })
      .catch(error => console.error(error.message));
  }

  handleEdit(id, age, name, email) {
    axios.put(`/api/records/${id}`, { age, name, email })
      .then(response => {
        let users = this.state.users.map(user => {
          if (user.id === id) {
            user = response.data;
          }

          return user;
        });

        this.setState({ users });
      })
      .catch(error => console.error(error.message));
  }

  handleDelete(id) {
    axios.delete(`/api/records/${id}`)
      .then(() => {
        let users = this.state.users.filter(user => user.id !== id);

        this.setState({ users });
      })
      .catch(error => console.error(error.message));
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
