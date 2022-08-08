import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

const customRender = () => render((
  <MemoryRouter>
    <HomePage />
  </MemoryRouter>
));

describe('HomePage', () => {
  context('with path /', () => {
    it('shows HOME heading', () => {
      const { queryByText } = customRender();

      expect(queryByText('Home')).not.toBeNull();
      expect(queryByText('About')).not.toBeNull();
      expect(queryByText('Restaurants')).not.toBeNull();
    });
  });
});
