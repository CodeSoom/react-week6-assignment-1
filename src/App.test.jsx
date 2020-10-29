import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories: [],
      restaurants: [],
    }));
  });

  context('with path /', () => {
    it('renders homepage', () => {
      const { container } = render((
        <App />
      ));

      expect(container).toHaveTextContent('Home');
    });
  });
});
