import React from 'react';

import { render } from '@testing-library/react';

import MenuItems from './MenuItems';

test('MenuItems', () => {
  const menuItems = [{ id: 1, name: '맥도날드' }];

  const { queryByText } = render((<MenuItems menuItems={menuItems} />));

  expect(queryByText(/맥도날드/)).not.toBeNull();
});
