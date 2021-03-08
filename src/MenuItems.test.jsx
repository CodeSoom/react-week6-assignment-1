import React from 'react';

import { render } from '@testing-library/react';

import MenuItems from './MenuItems';

describe('MenuItems', () => {
  context('with filled menuItems', () => {
    it('shows menu', () => {
      const menuItems = [{ id: 1, name: '맥도날드' }];

      const { queryByText } = render((<MenuItems menuItems={menuItems} />));

      expect(queryByText(/맥도날드/)).not.toBeNull();
    });
  });

  context('with empty menuItems', () => {
    it('shows "값이 없어요!"', () => {
      const { queryByText } = render(<MenuItems />);

      expect(queryByText(/값이 없어요!/)).not.toBeNull();
    });
  });
});
