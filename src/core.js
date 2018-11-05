import { Map, List } from 'immutable';

import factoryValidationError from './models/validationError';

export const addUser = state => (
  state.update('usersRepo', users => users.push(state.get('currentUser'))).set('currentUser', Map({}))
);

export const validateUser = (state) => {
  const errors = [];
  const {
    userName,
    postTitle,
    views,
    likes,
  } = state.get('currentUser').toJS();

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

  return state.set('isFormValid', errors.length === 0).set('errors', List(errors));
};

export const filterUsers = (state, term, field = 'userName') => {
  const filteredList = state.get('usersRepo').filter(user => user.get(field) === term);

  return state.set('filteredUsers', filteredList).set('filterTerm', term).set('filterField', field);
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
