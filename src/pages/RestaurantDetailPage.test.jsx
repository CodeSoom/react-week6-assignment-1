import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import RestaurantDetailPage from './RestaurantDetailPage';

import restaurantDetail from '../../fixtures/restaurantDetail';

describe('RestaurantsDetailPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    restaurantDetail,
  }));

  it('renders restaurantDetail', () => {
    const { container } = render(
      <MemoryRouter>
        <RestaurantDetailPage />
      </MemoryRouter>,
    );

    expect(container).toHaveTextContent('양천주가');
    expect(container).toHaveTextContent('주소');
    expect(container).toHaveTextContent('메뉴');
  });
});
