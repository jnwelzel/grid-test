import { Map, List } from 'immutable';

import { addUser, filterUsers, sortUsers } from '../core';

const initialState = Map(
  {
    usersRepo: List([]),
    currentUser: Map({}),
  },
);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'users.add':
      return addUser(state);
    case 'users.filter':
      return filterUsers(state);
    case 'users.sort':
      return sortUsers(state);
    default:
      return state;
  }
};

export default reducer;
