import React, { Component } from 'react';
import './UserTableRow.css';

class UserTableRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    let name = this.refs.name.value;
    let age = this.refs.age.value;
    let email = this.refs.email.value;

    this.props.onEdit(this.props.user.id, name, age, email);

    this.setState({ editing: false });
  }

  render() {
    return (
      !this.state.editing ?
      <tr>
        <td>{this.props.user.id}</td>
        <td>{this.props.user.name}</td>
        <td>{this.props.user.age}</td>
        <td>{this.props.user.email}</td>
        <td>
          <button onClick={() => this.setState({ editing: true })}>edit</button>
          <button onClick={() => this.props.onDelete(this.props.user.id)}>delete</button>
        </td>
      </tr>
      :
      <tr>
        <td colSpan={5}>
          <form className="edit-user" onSubmit={this.handleSubmit}>
            {this.props.user.id}
            <input
              type="text"
              ref="name"
              defaultValue={this.props.user.name}
            />
            <input
              type="text"
              ref="age"
              defaultValue={this.props.user.age}
            />
            <input
              type="text"
              ref="email"
              defaultValue={this.props.user.email}
            />
            <button type="submit">save</button>
          </form>
        </td>
      </tr>
    );
  }
}

export default UserTableRow;
