import React from 'react';
import './UserTable.css';

const UserTable = props => (
  <table className="user-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.email}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4}>No users.</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
