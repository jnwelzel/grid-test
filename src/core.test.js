import { List, Map } from 'immutable';

import factoryUser from './models/user';
import {
  addUser,
  validateUser,
  filterUsers,
  sortUsers,
  setUserProperty,
} from './core';

describe('application logic', () => {
  describe('addUser', () => {
    it('adds a user to the state', () => {
      const firstUser = Map(factoryUser('jnwelzel', 'JS rocks', 1024, 133));
      const newUser = Map(factoryUser('mpoppins', 'Kids 101', 2048, 266));
      const currentState = Map(
        { usersRepo: List([firstUser]), currentUser: newUser, isFormValid: true },
      );

      const nextState = addUser(currentState);

      expect(nextState.get('usersRepo').last().get('createdAt')).toBeDefined();
      expect(nextState.get('currentUser')).toEqual(Map(factoryUser('', '', '', '')));
      expect(nextState.get('usersRepo').size).toBe(2);
      expect(nextState.get('usersRepo').last().userName).toEqual(newUser.userName);
    });
  });

  describe('validateUser', () => {
    describe('adds error messages to the state', () => {
      it('when fields are null', () => {
        const invalidUser = Map(factoryUser(null, null, null, null));
        const currentState = Map(
          { isFormValid: true, errors: List([]), currentUser: invalidUser },
        );

        const nextState = validateUser(currentState);

        expect(nextState.get('isFormValid')).toBeFalsy();
        expect(nextState.get('errors').size).toBe(4);
      });

      it('when Likes and Views fields are not numbers', () => {
        const invalidUser = Map(factoryUser(null, null, '1', '2'));
        const currentState = Map({ isFormValid: true, errors: List([]), currentUser: invalidUser });

        const nextState = validateUser(currentState);

        expect(nextState.get('isFormValid')).toBeFalsy();
        expect(nextState.get('errors').get(2).get('message')).toEqual('Views must be a number');
        expect(nextState.get('errors').last().get('message')).toEqual('Likes must be a number');
        expect(nextState.get('errors').size).toBe(4);
      });
    });

    it('sets "isFormValid" to true when data is valid', () => {
      const userObj = factoryUser('ayy', 'post', 1, 122);
      const user = Map(userObj);
      const currentState = Map({ isFormValid: false, errors: List([]), currentUser: user });
      const nextState = validateUser(currentState);

      expect(nextState.get('errors').size).toBe(0);
      expect(nextState.get('isFormValid')).toBeTruthy();
    });
  });

  describe('filterUsers', () => {
    it('adds "filterTerm", "filterField" and "filteredUsers" to the state', () => {
      const term = 'jnwelzel';
      const field = 'userName';
      const firstUser = Map(factoryUser('jnwelzel', 'My First Blog Post', 0, 0));
      const secondUser = Map(factoryUser('hspecter', 'Italian Suits Rock', 0, 0));
      const currentState = Map({
        filteredUsers: List([]),
        filterTerm: term,
        filterField: field,
        usersRepo: List([firstUser, secondUser]),
      });

      const nextState = filterUsers(currentState);

      expect(nextState.get('filteredUsers').size).toBe(1);
      expect(nextState.get('filteredUsers').first().get('userName')).toEqual(term);
    });
  });

  describe('sortUsers', () => {
    it('adds the sorted "filteredUsers" to the state', () => {
      const field = 'postTitle';
      const order = 'ASC';
      const firstUser = Map(factoryUser('jnwelzel', 'My First Blog Post', 0, 0));
      const secondUser = Map(factoryUser('hspecter', 'Italian Suits Rock', 0, 0));
      const currentState = Map({
        filteredUsers: List([firstUser, secondUser]),
        sortOrder: order,
        sortField: field,
        usersRepo: List([firstUser, secondUser]),
      });

      const nextState = sortUsers(currentState);

      expect(nextState.get('filteredUsers').first().get('postTitle')).toEqual(secondUser.get('postTitle'));
      expect(nextState.get('filteredUsers').first().get('userName')).toEqual(secondUser.get('userName'));
    });
  });

  describe('setUserProperty', () => {
    it('adds the "userName" text to the state', () => {
      const userName = 'jnwelzel';
      const initialState = Map({ currentUser: Map(factoryUser()) });

      const nextState = setUserProperty(initialState, 'userName', userName);

      expect(nextState.get('currentUser').get('userName')).toEqual(userName);
    });

    it('adds the "postTitle" text to the state', () => {
      const postTitle = 'A Cool Blog Post';
      const initialState = Map({ currentUser: Map(factoryUser()) });

      const nextState = setUserProperty(initialState, 'postTitle', postTitle);

      expect(nextState.get('currentUser').get('postTitle')).toEqual(postTitle);
    });

    it('adds the "views" value to the state', () => {
      const views = '834';
      const initialState = Map({ currentUser: Map(factoryUser()) });

      const nextState = setUserProperty(initialState, 'views', views, true);

      expect(nextState.get('currentUser').get('views')).toEqual(834);
    });

    it('adds zero to the state for the "views" value when the input is not a number', () => {
      const views = 'az834';
      const initialState = Map({ currentUser: Map(factoryUser()) });

      const nextState = setUserProperty(initialState, 'views', views, true);

      expect(nextState.get('currentUser').get('views')).toEqual(0);
    });

    it('adds the "likes" value to the state', () => {
      const likes = '834';
      const initialState = Map({ currentUser: Map(factoryUser()) });

      const nextState = setUserProperty(initialState, 'likes', likes, true);

      expect(nextState.get('currentUser').get('likes')).toEqual(834);
    });

    it('adds zero to the state for the "likes" value when the input is not a number', () => {
      const likes = 'az834';
      const initialState = Map({ currentUser: Map(factoryUser()) });

      const nextState = setUserProperty(initialState, 'likes', likes, true);

      expect(nextState.get('currentUser').get('likes')).toEqual(0);
    });
  });
});
