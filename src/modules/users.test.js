import { Map, List } from 'immutable';

import reducer from './users';
import factoryUser from '../models/user';

describe('users reducer', () => {
  it('handles "users.add" action', () => {
    const currentUser = Map(factoryUser('jnwelzel', 'JS rocks', 1024, 133));
    const newUser = Map(factoryUser('mpoppins', 'Kids 101', 2048, 266));
    const initialState = Map({ usersRepo: List([currentUser]), currentUser: Map(newUser) });
    const action = { type: 'users.add' };

    const nextState = reducer(initialState, action);

    expect(nextState).toEqual(
      Map({ usersRepo: List([currentUser, newUser]), currentUser: Map({}) }),
    );
  });
});
