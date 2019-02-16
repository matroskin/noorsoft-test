import React from 'react';
import './UserTableRow.css';

function UserTableRow(props) {
  return (
    <tr>
      <td>{props.user.id}</td>
      <td>{props.user.name}</td>
      <td>{props.user.age}</td>
      <td>{props.user.email}</td>
      <td>
        <button onClick={() => props.onDelete(props.user.id)}>delete</button>
      </td>
    </tr>
  );
}

export default UserTableRow;
