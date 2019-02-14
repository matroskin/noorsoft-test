import React, {Component} from 'react';
import './AddUser.css';

class AddUser extends Component {
  constructor() {
    super();

    this.state = {
      id: null,
      age: "",
      name: "",
      email: ""
    };
  }

  change = event => {
    this.setState({
      id: this.props.id + 1,
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    // clear form
    this.setState({
      id: "",
      age: "",
      name: "",
      email: ""
    });
  };

  render() {
    return (
      <form className="add-user">
        <label htmlFor="age">Age</label>
        <input
          type="text"
          name="age"
          id="age"
          value={this.state.age}
          onChange={event => this.change(event)}
        />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          onChange={event => this.change(event)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={this.state.email}
          onChange={event => this.change(event)}
        />
        <button onClick={event => this.onSubmit(event)}>Add user</button>
      </form>
    );
  }
}

export default AddUser;
