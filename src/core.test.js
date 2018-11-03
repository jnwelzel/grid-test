import { List, Map } from 'immutable';

import factoryUser from './models/user';
import {
  addUser,
  validateUser,
  filterUsers,
  sortUsers,
} from './core';

describe('application logic', () => {
  describe('addUser', () => {
    it('adds a user to the state', () => {
      const firstUser = factoryUser('jnwelzel', 'JS rocks', 1024, 133);
      const newUser = factoryUser('mpoppins', 'Kids 101', 2048, 266);
      const currentState = Map({ users: List([firstUser]) });

      const nextState = addUser(currentState, newUser);

      expect(nextState).toEqual(Map({ users: List([firstUser, newUser]) }));
      expect(nextState.get('users').size).toBe(2);
      expect(nextState.get('users').last().userName).toEqual(newUser.userName);
    });
  });

  describe('validateUser', () => {
    describe('adds error messages to the state', () => {
      it('when fields are null', () => {
        const invalidUser = factoryUser(null, null, null, null);
        const currentState = Map({ isFormValid: true, errors: List() });

        const nextState = validateUser(currentState, invalidUser);

        expect(nextState.get('isFormValid')).toBeFalsy();
        expect(nextState.get('errors').size).toBe(4);
      });

      it('when Likes and Views fields are not numbers', () => {
        const invalidUser = factoryUser(null, null, '1', '2');
        const currentState = Map({ isFormValid: true, errors: List() });

        const nextState = validateUser(currentState, invalidUser);

        expect(nextState.get('isFormValid')).toBeFalsy();
        expect(nextState.get('errors').size).toBe(4);
      });
    });

    it('sets "isFormValid" to true when data is valid', () => {
      const user = factoryUser('jnwelzel', 'Title', 100, 20);
      const currentState = Map({ isFormValid: false, errors: List() });

      const nextState = validateUser(currentState, user);

      expect(nextState.get('isFormValid')).toBeTruthy();
      expect(nextState.get('errors').size).toBe(0);
    });
  });

  describe('filterUsers', () => {
    it('adds "filterTerm", "filterField" and "filteredUsers" to the state', () => {
      const term = 'jnwelzel';
      const field = 'userName';
      const firstUser = factoryUser('jnwelzel', 'My First Blog Post', 0, 0);
      const secondUser = factoryUser('hspecter', 'Italian Suits Rock', 0, 0);
      const currentState = Map({
        filteredUsers: List([]),
        filterTerm: '',
        filterField: '',
        users: List([firstUser, secondUser]),
      });

      const nextState = filterUsers(currentState, term, field);

      expect(nextState.get('filterTerm')).toEqual(term);
      expect(nextState.get('filterField')).toEqual(field);
      expect(nextState.get('filteredUsers').size).toBe(1);
      expect(nextState.get('filteredUsers').first().userName).toEqual(term);
    });
  });

  describe('sortUsers', () => {
    it('adds "sortField", "sortOrder" and a sorted "filteredUsers" to the state', () => {
      const field = 'postTitle';
      const order = 'DES';
      const firstUser = factoryUser('hspecter', 'Italian Suits Rock', 0, 0);
      const secondUser = factoryUser('jnwelzel', 'My First Blog Post', 0, 0);
      const currentState = Map({
        filteredUsers: List([firstUser, secondUser]),
        sortOrder: 'ASC',
        sortField: 'userName',
        users: List([firstUser, secondUser]),
      });

      const nextState = sortUsers(currentState, field, order);

      expect(nextState.get('filteredUsers').first().postTitle).toEqual(secondUser.postTitle);
      expect(nextState.get('sortField')).toEqual(field);
      expect(nextState.get('sortOrder')).toEqual(order);
    });
  });
});
