import React, { Component } from 'react';
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
      age: '',
      name: '',
      email: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    let age = this.state.age;
    let name = this.state.name;
    let email = this.state.email;

    this.props.onAdd(age, name, email);

    this.setState({
      age: '',
      name: '',
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

export default AddUser;
