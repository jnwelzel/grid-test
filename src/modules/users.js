import { Map, List } from 'immutable';

const initialState = Map({ usersRepo: List([]) });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'users.add':
      return state;
    default:
      return state;
  }
};

export default reducer;
