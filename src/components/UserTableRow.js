import React from 'react';
import './UserTableRow.css';

function UserTableRow(props) {
  return (
    <tr>
      <td>{props.user.id}</td>
      <td>{props.user.name}</td>
      <td>{props.user.age}</td>
      <td>{props.user.email}</td>
      <td></td>
    </tr>
  );
}

export default UserTableRow;
