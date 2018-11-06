import { Map, List } from 'immutable';

import factoryValidationError from './models/validationError';

export const addUser = state => (
  state.update('usersRepo', users => users.push(state.get('currentUser'))).set('currentUser', Map({}))
);

export const validateUser = (state) => {
  let errors = List([]);
  const {
    userName,
    postTitle,
    views,
    likes,
  } = state.get('currentUser').toJS();

  if (!userName) {
    errors = errors.push(Map(factoryValidationError('userName', 'User Name is required')));
  }
  if (!postTitle) {
    errors = errors.push(Map(factoryValidationError('postTitle', 'Post Title is required')));
  }
  if (!views) {
    errors = errors.push(Map(factoryValidationError('views', 'Views is required')));
  } else if (typeof views !== 'number') {
    errors = errors.push(Map(factoryValidationError('views', 'Views must be a number')));
  }
  if (!likes) {
    errors = errors.push(Map(factoryValidationError('likes', 'Likes is required')));
  } else if (typeof likes !== 'number') {
    errors = errors.push(Map(factoryValidationError('likes', 'Likes must be a number')));
  }

  return state.set('isFormValid', errors.size === 0).set('errors', errors);
};

export const filterUsers = (state) => {
  const field = state.get('filterField');
  const term = state.get('filterTerm');
  const filteredList = state.get('usersRepo').filter(user => user.get(field) === term);

  return state.set('filteredUsers', filteredList);
};

const doSort = (a, b, field, order) => {
  if (a.get(field) < b.get(field)) { return order === 'ASC' ? -1 : 1; }
  if (a.get(field) > b.get(field)) { return order === 'ASC' ? 1 : -1; }
  return 0;
};

export const sortUsers = (state) => {
  const field = state.get('sortField');
  const order = state.get('sortOrder');
  const sortedUsers = state.get('filteredUsers').sort((a, b) => doSort(a, b, field, order));
  return state.set('filteredUsers', sortedUsers);
};

export const setUserProperty = (state, property, value, isNumber) => (
  state.setIn(['currentUser', property], isNumber ? parseInt(value, 10) || 0 : value)
);
