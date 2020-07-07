import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

describe('<HomePage />', () => {
  context('render HomePage', () => {
    it('show page name & menus', () => {
      const { container } = render(<MemoryRouter><HomePage /></MemoryRouter>);

      expect(container).toHaveTextContent('Home');
      expect(container).toHaveTextContent('About');
      expect(container).toHaveTextContent('Restaurants');
    });
  });
});
