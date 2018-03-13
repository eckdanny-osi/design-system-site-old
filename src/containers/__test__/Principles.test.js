import React from 'react';
import { shallow } from 'enzyme';
import Principles from '../Principles';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

describe('Principles', () => {
  it('renders without crashing', () => {
    const store = createStore(state => state, {});
    expect(() =>
      shallow(
        <Provider store={store}>
          <Principles />
        </Provider>
      )
    ).not.toThrow();
    expect(true).toBe(true);
  });
});
