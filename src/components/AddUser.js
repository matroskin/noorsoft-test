import React, { Component } from 'react';
import './AddUser.css';

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
      <form className="add-user" onSubmit={this.handleSubmit}>
        <label htmlFor="age">Age</label>
        <input
          type="text"
          name="age"
          id="age"
          placeholder="age"
          value={this.state.age}
          onChange={this.handleChange}
        />

        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name"
          value={this.state.name}
          onChange={this.handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="email"
          value={this.state.email}
          onChange={this.handleChange}
        />

        <button type="submit">add&nbsp;user</button>
      </form>
    );
  }
}

export default AddUser;
