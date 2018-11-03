import { fromJS } from 'immutable';

import factoryValidationError from './models/validationError';

export const addUser = (state, user) => (
  state.update('users', users => users.push(user))
);

export const validateUser = (state, user) => {
  const errors = [];
  const {
    userName,
    postTitle,
    views,
    likes,
  } = user;

  if (!userName) {
    errors.push(factoryValidationError('userName', 'User Name is required'));
  }
  if (!postTitle) {
    errors.push(factoryValidationError('postTitle', 'Post Title is required'));
  }
  if (!views) {
    errors.push(factoryValidationError('views', 'Views is required'));
  } else if (typeof views !== 'number') {
    errors.push(factoryValidationError('views', 'Views must be a number'));
  }
  if (!likes) {
    errors.push(factoryValidationError('likes', 'Likes is required'));
  } else if (typeof likes !== 'number') {
    errors.push(factoryValidationError('likes', 'Likes must be a number'));
  }

  return state.set('isFormValid', errors.length === 0).set('errors', fromJS(errors));
};

export const filterUsers = (state, term, field = 'userName') => {
  const filteredList = state.get('users').filter(user => user[field] === term);

  return state.set('filteredUsers', filteredList).set('filterTerm', term).set('filterField', field);
};

const doSort = (a, b, field, order) => {
  if (a[field] < b[field]) { return order === 'ASC' ? -1 : 1; }
  if (a[field] > b[field]) { return order === 'ASC' ? 1 : -1; }
  return 0;
};

export const sortUsers = (state, field, order) => {
  const sortedUsers = state.get('filteredUsers').sort((a, b) => doSort(a, b, field, order));
  return state.set('filteredUsers', sortedUsers).set('sortField', field).set('sortOrder', order);
};
