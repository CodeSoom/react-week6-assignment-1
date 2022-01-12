import React from 'react';

import { render } from '@testing-library/react';

import MenuItems from './MenuItems';

describe('MenuItems', () => {
  const menuItems = [
    { name: '떡볶이' },
    { name: '순대' },
  ];

  it('renders menu name', () => {
    const { container } = render((
      <MenuItems menuItems={menuItems} />
    ));

    expect(container).toHaveTextContent('떡볶이');
    expect(container).toHaveTextContent('순대');
  });

  it('renders notice if there are no menu', () => {
    const { container } = render((
      <MenuItems menuItems={[]} />
    ));

    expect(container).toHaveTextContent('ㅠㅠ');
  });
});
