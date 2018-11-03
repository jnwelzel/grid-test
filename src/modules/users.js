import Immutable from 'immutable';

const initialState = { users: Immutable.List([]) };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'users.add':
      return state;
    default:
      return state;
  }
};

export default reducer;
