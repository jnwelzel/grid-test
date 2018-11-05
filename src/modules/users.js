import { Map, List } from 'immutable';

import { addUser } from '../core';

const initialState = Map({ usersRepo: List([]), currentUser: Map({}) });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'users.add':
      return addUser(state);
    default:
      return state;
  }
};

export default reducer;
