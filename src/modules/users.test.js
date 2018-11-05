import { Map, List } from 'immutable';

import reducer from './users';
import factoryUser from '../models/user';

const user1 = Map(factoryUser('jnwelzel', 'JS rocks', 1024, 133));
const user2 = Map(factoryUser('mpoppins', 'Kids 101', 2048, 266));

describe('users reducer', () => {
  it('handles "users.add" action', () => {
    const initialState = Map({ usersRepo: List([user1]), currentUser: Map(user2) });
    const action = { type: 'users.add' };

    const nextState = reducer(initialState, action);

    expect(nextState).toEqual(
      Map({ usersRepo: List([user1, user2]), currentUser: Map({}) }),
    );
  });

  it('handles "users.filter" action', () => {
    const initialState = Map({
      usersRepo: List([user1, user2]),
      filteredUsers: List([]),
      filterTerm: 'mpoppins',
      filterField: 'userName',
    });
    const action = { type: 'users.filter' };

    const nextState = reducer(initialState, action);

    expect(nextState.get('filteredUsers')).toEqual(List([user2]));
  });

  it('handles "users.sort" action', () => {
    const initialState = Map({
      filteredUsers: List([user1, user2]),
      sortOrder: 'DESC',
      sortField: 'views',
    });
    const action = { type: 'users.sort' };

    const nextState = reducer(initialState, action);

    expect(nextState.get('filteredUsers')).toEqual(List([user2, user1]));
  });
});
