import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantPage from './RestaurantPage';

import RESTAURANT from '../fixtures/restaurant';

describe('RestaurantPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurant: RESTAURANT,
    }));
  });

  it('shows name, address, menus of Restaurant', () => {
    const { getByText } = render((
      <RestaurantPage />
    ));

    expect(getByText('양천주가')).not.toBeNull();
    expect(getByText('서울 강남구 123456')).not.toBeNull();
    expect(getByText('비빔밥')).not.toBeNull();
    expect(getByText('짬뽕')).not.toBeNull();
    expect(getByText('탕수육')).not.toBeNull();
  });
});
