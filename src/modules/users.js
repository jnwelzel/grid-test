import { Map, List } from 'immutable';

import {
  addUser,
  filterUsers,
  sortUsers,
  setUserProperty,
  validateUser,
  setFilterTerm,
  resetFilteredUsers,
} from '../core';
import userFactory from '../models/user';

const initialState = Map(
  {
    usersRepo: List([]),
    filteredUsers: List([]),
    currentUser: Map(userFactory()),
    isFormValid: false,
    errors: Map({}),
    filterField: 'userName',
    filterTerm: '',
  },
);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'users.add':
      return resetFilteredUsers(addUser(validateUser(state)));
    case 'users.filter':
      return filterUsers(state);
    case 'users.sort':
      return sortUsers(state);
    case 'users.setUserProperty':
      return setUserProperty(state, action.property, action.value, action.isNumber);
    case 'users.setFilterTerm':
      return setFilterTerm(state, action.filterTerm);
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

export const setFilterTermAction = filterTerm => (
  { type: 'users.setFilterTerm', filterTerm }
);

export const filterUserTableAction = () => (
  { type: 'users.filter' }
);

export default reducer;
