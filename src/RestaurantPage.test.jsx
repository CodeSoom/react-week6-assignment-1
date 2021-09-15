import { render } from '@testing-library/react';

import RestaurantPage from './RestaurantPage';

describe('RestaurantPage', () => {
  it('shows name, address, menus of Restaurant', () => {
    const { name, address, menuItems } = {
      id: 1,
      categoryId: 1,
      name: '양천주가',
      address: '서울 강남구 123456',
      menuItems: [
        {
          id: 1,
          restaurantId: 1,
          name: '비빔밥',
        },
        {
          id: 2,
          restaurantId: 1,
          name: '짬뽕',
        },
        {
          id: 16,
          restaurantId: 1,
          name: '탕수육',
        },
      ],
    };

    const { getByText } = render((
      <RestaurantPage
        name={name}
        address={address}
        menuItems={menuItems}
      />
    ));

    expect(getByText('양천주가')).not.toBeNull();
    expect(getByText('서울 강남구 123456')).not.toBeNull();
    expect(getByText('메뉴')).not.toBeNull();
    expect(getByText('비빔밥')).not.toBeNull();
    expect(getByText('짬뽕')).not.toBeNull();
    expect(getByText('탕수육')).not.toBeNull();
  });
});
