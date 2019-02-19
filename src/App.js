import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import Header from './components/Header';
import UserTable from './components/UserTable';
import AddUser from './components/AddUser';

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

  handleAdd(name, age, email) {
    axios.post('/api/records', { name, age, email })
      .then(response => response.data)
      .then(user => {
        let users = [...this.state.users, user];

        this.setState({ users });
      })
      .catch(error => console.error(error.message));
  }

  handleEdit(id, name, age, email) {
    axios.put(`/api/records/${id}`, { name, age, email })
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
      <Container>
        <Row>
          <Col>
            <Header title='Users' />
          </Col>
        </Row>

        <Row>
          <Col>
          <UserTable
            users={this.state.users}
            onEdit={this.handleEdit}
            onDelete={this.handleDelete}
          />
          </Col>
        </Row>

        <Row>
          <Col>
            <AddUser
              onAdd={this.handleAdd}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
