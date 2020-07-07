import React from 'react';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

describe('<HomePage />', () => {
  context('render HomePage', () => {
    it('show page name & menus', () => {
      const { container } = render(<HomePage />);

      expect(container).toHaveTextContent('Home');
      expect(container).toHaveTextContent('About');
      expect(container).toHaveTextContent('Restaurants');
    });
  });
});
