import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Tr, Td, Th } from 'reactable';
import Header from './components/Header';
import AddUser from './components/AddUser';
import { deleteUser, editUser } from './actions';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Input
} from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      editing: false,
      name: '',
      age: '',
      email: '',
      activeId: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    let name = this.state.name;
    let age = this.state.age;
    let email = this.state.email;
    let id = this.state.activeId;

    this.props.onEdit(id, name, age, email);

    this.setState({
      editing: false,
      name: '',
      age: '',
      email: '',
      activeId: ''
    });
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
            <Table
              className="table"
              sortable={true}
              filterable={['Id', 'Name', 'Age', 'Email']}
            >
              {this.props.users.length > 0 ? (
                this.props.users.map((user, i) => (
                  this.state.editing && user.id === this.state.activeId ?
                    (
                      <Tr key={user.id}>
                        <Td column="Id" colSpan={6}>
                          <Form onSubmit={this.handleSubmit}>
                            <Container>
                              <Row>
                                <Col xs="1">
                                  {user.id}
                                </Col>

                                <Col xs="3">
                                  <Input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    defaultValue={user.name}
                                    onChange={this.handleChange}
                                  />
                                </Col>

                                <Col xs="2">
                                  <Input
                                    type="text"
                                    name="age"
                                    placeholder="Age"
                                    defaultValue={user.age}
                                    onChange={this.handleChange}
                                  />
                                </Col>

                                <Col xs="3">
                                  <Input
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    defaultValue={user.email}
                                    onChange={this.handleChange}
                                  />
                                </Col>

                                <Col xs="3">
                                  <Button type="submit" color="success" id={user.id}>save</Button>
                                </Col>
                              </Row>
                            </Container>
                          </Form>
                        </Td>
                      </Tr>
                    )
                  :
                    (
                      <Tr key={user.id}>
                        <Th column="Id" scope="row">{user.id}</Th>
                        <Td column="Name">{user.name}</Td>
                        <Td column="Age">{user.age}</Td>
                        <Td column="Email">{user.email}</Td>
                        <Td column="Edit">
                          <Button onClick={() => this.setState({ editing: true, activeId: user.id })} color="primary">edit</Button>
                        </Td>
                        <Td column="Delete">
                          <Button onClick={() => this.props.onDelete(user.id)} color="danger">delete</Button>
                        </Td>
                      </Tr>
                    )
                  )
                )
              ) : (
                <Tr>
                  <Td column="Result" colSpan={6}>No users.</Td>
                </Tr>
              )}
            </Table>
          </Col>
        </Row>

        <Row>
          <Col>
            <AddUser />
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onDelete: (id) => dispatch(deleteUser(id)),
    onEdit: (id, name, age, email) => dispatch(editUser(id, name, age, email))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
