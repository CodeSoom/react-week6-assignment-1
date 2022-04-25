import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantPage from './RestaurantPage';

import RESTAURANT from '../fixtures/restaurant';

describe('RetaurantPage', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurant: RESTAURANT,
  }));

  it('renders restaurant name', () => {
    const { container } = render((
      <RestaurantPage />
    ));

    expect(container).toHaveTextContent('성전떡볶이');
  });

  it('renders restaurant address', () => {
    const { container } = render((
      <RestaurantPage />
    ));

    expect(container).toHaveTextContent('주소: 서울 강남구 강남대로94길 21');
  });

  it('renders menu', () => {
    const { container } = render((
      <RestaurantPage />
    ));

    expect(container).toHaveTextContent('메뉴');

    ['떡볶이', '튀김', '오뎅', '컵밥'].forEach((menu) => (
      expect(container).toHaveTextContent(menu)
    ));
  });
});
