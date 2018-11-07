import { Map } from 'immutable';

import factoryUser from './models/user';

export const addUser = (state) => {
  if (!state.get('isFormValid')) return state;

  const updatedState = state.setIn(['currentUser', 'createdAt'], new Date());
  return updatedState.update(
    'usersRepo', users => users.push(updatedState.get('currentUser')),
  )
    .set('currentUser', Map(factoryUser('', '', '', '')));
};

export const validateUser = (state) => {
  let errors = Map({});
  const {
    userName,
    postTitle,
    views,
    likes,
  } = state.get('currentUser').toJS();

  if (!userName) {
    errors = errors.set('userName', 'User Name is required');
  }
  if (!postTitle) {
    errors = errors.set('postTitle', 'Post Title is required');
  }
  if (!views) {
    errors = errors.set('views', 'Views is required');
  } else if (typeof views !== 'number') {
    errors = errors.set('views', 'Views must be a number');
  }
  if (!likes) {
    errors = errors.set('likes', 'Likes is required');
  } else if (typeof likes !== 'number') {
    errors = errors.set('likes', 'Likes must be a number');
  }

  return state.set('isFormValid', errors.size === 0).set('errors', errors);
};

export const filterUsers = (state) => {
  if (!state.get('filterTerm')) return state.set('filteredUsers', state.get('usersRepo'));

  const field = state.get('filterField');
  const term = state.get('filterTerm');
  const filteredList = state.get('usersRepo').filter(user => user.get(field) === term);

  if (filteredList.size === 0) return state;

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

export const setFilterTerm = (state, filterTerm) => (
  state.set('filterTerm', filterTerm)
);

export const resetFilteredUsers = (state) => {
  if (!state.get('isFormValid')) return state;

  return state.set('filteredUsers', state.get('usersRepo'))
    .set('isFormValid', false)
    .set('filterTerm', '');
};
