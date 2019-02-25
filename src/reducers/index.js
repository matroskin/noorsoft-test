import { DATA_FETCHED_SUCCESSFULLY, RECORD_ADDED, RECORD_DELETE, RECORD_UPDATE } from '../actions';

export default function reducer(state = [], action) {
  switch (action.type) {
    case DATA_FETCHED_SUCCESSFULLY:
      return action.users;

    case RECORD_ADDED:
      return [...state, action.user];

    case RECORD_DELETE:
      return state.filter(user => user.id !== action.id);

    case RECORD_UPDATE:
      return state.map(user => {
        if (user.id !== action.user.id) {
          return user;
        }

        return action.user;
      });

    default:
      return state;
  }
}
