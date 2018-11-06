import { Map, List } from 'immutable';

import {
  addUser,
  filterUsers,
  sortUsers,
  setUserProperty,
  validateUser
} from '../core';
import userFactory from '../models/user';

const initialState = Map(
  {
    usersRepo: List([]),
    currentUser: Map(userFactory()),
    isFormValid: false,
  },
);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'users.add':
      return addUser(validateUser(state));
    case 'users.filter':
      return filterUsers(state);
    case 'users.sort':
      return sortUsers(state);
    case 'users.setUserProperty':
      return setUserProperty(state, action.property, action.value, action.isNumber);
    default:
      return state;
  }
};

export const setUserPropertyAction = (property, value, isNumber) => (
  { type: 'users.setUserProperty', property, value, isNumber }
);

export const addUserAction = () => (
  { type: 'users.add' }
);

export default reducer;
