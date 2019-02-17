import React from 'react';
import UserTableRow from './UserTableRow';
import './UserTable.css';

function UserTable(props) {
  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user, i) => (
            <UserTableRow key={i} user={user} onEdit={props.onEdit} onDelete={props.onDelete} />
          ))
        ) : (
          <tr>
            <td colSpan={5}>No users.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default UserTable;
