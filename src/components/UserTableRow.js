import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Input
} from 'reactstrap';

class UserTableRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      name: '',
      age: '',
      email: ''
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

    this.props.onEdit(this.props.user.id, name, age, email);

    this.setState({ editing: false });
  }

  render() {
    return (
      !this.state.editing ?
      <tr>
        <th scope="row">{this.props.user.id}</th>
        <td>{this.props.user.name}</td>
        <td>{this.props.user.age}</td>
        <td>{this.props.user.email}</td>
        <td>
          <Button onClick={() => this.setState({ editing: true })} color="primary">edit</Button>{' '}
          <Button onClick={() => this.props.onDelete(this.props.user.id)} color="danger">delete</Button>
        </td>
      </tr>
      :
      <tr>
        <td colSpan={5}>
          <Form onSubmit={this.handleSubmit}>
            <Container>
              <Row>
                <Col xs="1">
                  {this.props.user.id}
                </Col>

                <Col xs="3">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    defaultValue={this.props.user.name}
                    onChange={this.handleChange}
                  />
                </Col>

                <Col xs="2">
                  <Input
                    type="text"
                    name="age"
                    placeholder="Age"
                    defaultValue={this.props.user.age}
                    onChange={this.handleChange}
                  />
                </Col>

                <Col xs="3">
                  <Input
                    type="text"
                    name="email"
                    placeholder="Email"
                    defaultValue={this.props.user.email}
                    onChange={this.handleChange}
                  />
                </Col>

                <Col xs="3">
                  <Button type="submit" color="success">save</Button>
                </Col>
              </Row>
            </Container>
          </Form>
        </td>
      </tr>
    );
  }
}

export default UserTableRow;
