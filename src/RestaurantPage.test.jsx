import { render } from '@testing-library/react';

import RestaurantPage from './RestaurantPage';

describe('RestaurantPage', () => {
  it('shows name, address, menus of Restaurant', () => {
    const { getByText } = render((
      <RestaurantPage />
    ));

    expect(getByText('양천주가')).not.toBeNull();
    expect(getByText('서울 강남구 123456')).not.toBeNull();
    expect(getByText('메뉴')).not.toBeNull();
    expect(getByText('비빔밥')).not.toBeNull();
    expect(getByText('짬뽕')).not.toBeNull();
    expect(getByText('탕수육')).not.toBeNull();
  });
});
