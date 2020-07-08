import React from 'react';

import { render } from '@testing-library/react';

import App from './App';
import { useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories: [],
      restaurants: [],
    }));
  });

  context('with path /', ()=> {
    it('renders the home page', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('Home');
    });
  });
});
