import axios from 'axios';

export const DATA_FETCHED_SUCCESSFULLY = 'DATA_FETCHED_SUCCESSFULLY';
export const RECORD_ADDED = 'RECORD_ADDED';
export const RECORD_DELETE = 'RECORD_DELETE';
export const RECORD_UPDATE = 'RECORD_UPDATE';

export function getUsers() {
  return axios.get('/api/records')
    .then(response => response.data)
    .then(users => ({
      type: DATA_FETCHED_SUCCESSFULLY,
      users
    }))
    .catch(error => console.error(error.message));
}

export function addUser(name, age, email) {
  return axios.post('/api/records', { name, age, email })
    .then(response => response.data)
    .then(user => ({
      type: RECORD_ADDED,
      user
    }));
}

export function deleteUser(id) {
  return axios.delete(`/api/records/${id}`)
    .then(response => ({
      type: RECORD_DELETE,
      id
    }));
}

export function editUser(id, name, age, email) {
  return axios.put(`/api/records/${id}`, { name, age, email })
    .then(response => response.data)
    .then(user => ({
      type: RECORD_UPDATE,
      user
    }));
}
