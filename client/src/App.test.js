import React from 'react';
import App from './App';
import { mount } from 'enzyme';
import { apiUrl } from './environment/environment';

describe('App', () => {
  it('renders without crashing', () => {
    mount(<App />);
  });

  it('should load users from database', () => {
    expect.assertions(1);
    return fetch(`${apiUrl}/users`)
      .then(res => res.json())
      .then(users => {
        console.log(users);
        expect(users.length).toBeGreaterThan(0);
      });
  });
});
