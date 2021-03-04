import React from 'react';

import { render } from '@testing-library/react';

import Menus from './Menus';

describe('Menus', () => {
  context('with menus', () => {
    it('renders menus', () => {
      const menus = [
        { id: 1, name: '탕수육' },
      ];

      const { container } = render(<Menus menus={menus} />);

      expect(container).toHaveTextContent('탕수육');
    });
  });

  context('without menu', () => {
    it('renders no menu message', () => {
      const { queryByText } = render(<Menus />);

      expect(queryByText(/메뉴가 없어요/)).not.toBeNull();
    });
  });
});
