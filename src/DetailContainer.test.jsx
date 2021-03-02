import React from 'react';

import { render } from '@testing-library/react';

import DetailContainer from './DetailContainer';

test('DetailContainer', () => {
  const restaurant = {
    name: '우리집',
    address: '성남시',
    menuItems: [{
      id: 23,
      name: '버내너',
    }],
  };

  const { queryByText } = render((<DetailContainer restaurant={restaurant} />));

  expect(queryByText('우리집')).not.toBeNull();
  expect(queryByText('버내너')).not.toBeNull();
});
