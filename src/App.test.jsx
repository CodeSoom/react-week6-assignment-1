import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  context('with pathname /', () => {
    it('renders homepage', () => {
      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        regions: [],
        categories: [],
        restaurants: [],
      }));

      const { container } = render((<App />));

      expect(container).toHaveTextContent('Home');
    });
  });
  context('without valid pathname', () => {
    it('renders notFoundPage', () => {
      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        regions: [],
        categories: [],
        restaurants: [],
      }));

      const MyComponent = null;

      const { container } = render((<App MyComponent={MyComponent} />));

      expect(container).not.toHaveTextContent('Home');
    });
  });
});
