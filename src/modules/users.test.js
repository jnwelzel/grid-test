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

  it('handles "users.setUserProperty" action for "userName" property', () => {
    const initialState = Map({
      currentUser: Map(factoryUser()),
    });
    const uName = 'hpotter';
    const action = { type: 'users.setUserProperty', property: 'userName', value: uName };

    const nextState = reducer(initialState, action);

    expect(nextState.get('currentUser').get('userName')).toEqual(uName);
  });

  it('handles "users.setUserProperty" action for "postTitle" property', () => {
    const initialState = Map({
      currentUser: Map(factoryUser()),
    });
    const postTitle = 'My First Blog Post';
    const action = { type: 'users.setUserProperty', property: 'postTitle', value: postTitle };

    const nextState = reducer(initialState, action);

    expect(nextState.get('currentUser').get('postTitle')).toEqual(postTitle);
  });

  it('handles "users.setUserProperty" action for "views" property', () => {
    const initialState = Map({
      currentUser: Map(factoryUser()),
    });
    const views = '552';
    const action = { type: 'users.setUserProperty', property: 'views', value: views, isNumber: true };

    const nextState = reducer(initialState, action);

    expect(nextState.get('currentUser').get('views')).toEqual(552);
  });

  it('handles "users.setUserProperty" action for "likes" property', () => {
    const initialState = Map({
      currentUser: Map(factoryUser()),
    });
    const likes = '291';
    const action = { type: 'users.setUserProperty', property: 'likes', value: likes, isNumber: true };

    const nextState = reducer(initialState, action);

    expect(nextState.get('currentUser').get('likes')).toEqual(291);
  });
});
