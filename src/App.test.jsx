import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories: [],
      restaurants: [],
    }));
  });
  context('with path /', () => {
    it('render HomePage', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('Home');
    });
  });
});
