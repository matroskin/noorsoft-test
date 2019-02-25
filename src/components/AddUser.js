import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions';
import {
  Table,
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input
} from 'reactstrap';

class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
      email: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    let name = this.state.name;
    let age = this.state.age;
    let email = this.state.email;

    this.props.onAdd(name, age, email);

    this.setState({
      name: '',
      age: '',
      email: ''
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <Table>
        <tbody>
          <tr>
            <td colSpan={5}>
              <Form onSubmit={this.handleSubmit}>
                <Container>
                  <Row>
                    <Col xs="1">
                      #
                    </Col>

                    <Col xs="3">
                      <FormGroup>
                        <Input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Name"
                          value={this.state.name}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </Col>

                    <Col xs="2">
                      <FormGroup>
                        <Input
                          type="text"
                          name="age"
                          id="age"
                          placeholder="Age"
                          value={this.state.age}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </Col>

                    <Col xs="3">
                      <FormGroup>
                        <Input
                          type="text"
                          name="email"
                          id="email"
                          placeholder="Email"
                          value={this.state.email}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </Col>

                    <Col xs="3">
                      <Button type="submit" color="success">add user</Button>
                    </Col>
                  </Row>
                </Container>
              </Form>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: (name, age, email) => dispatch(addUser(name, age, email))
  };
}

export default connect(null, mapDispatchToProps)(AddUser);
