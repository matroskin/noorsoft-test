import React from 'react';
import { Table } from 'reactstrap';
import UserTableRow from './UserTableRow';

function UserTable(props) {
  return (
    <Table>
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
            <UserTableRow key={i} user={user} />
          ))
        ) : (
          <tr>
            <td colSpan={5}>No users.</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

export default UserTable;
