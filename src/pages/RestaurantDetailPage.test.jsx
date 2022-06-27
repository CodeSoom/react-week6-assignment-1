import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import RestaurantDetailPage from './RestaurantDetailPage';

import restaurantDetail from '../../fixtures/restaurantDetail';

describe('RestaurantsDetailPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const renderRestaurantDetailPage = () => render(
    <MemoryRouter>
      <RestaurantDetailPage />
    </MemoryRouter>,
  );

  context('with restaurantDetail', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurantDetail,
      }));
      jest.clearAllMocks();
    });

    it('renders restaurantDetail', () => {
      const { container } = renderRestaurantDetailPage();

      expect(container).toHaveTextContent('양천주가');
      expect(container).toHaveTextContent('주소');
      expect(container).toHaveTextContent('메뉴');
    });
  });

  context('without restaurantDetail', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({ restaurantDetail: null }));
      jest.clearAllMocks();
    });

    it('renders "로딩 중..."', () => {
      const { container } = renderRestaurantDetailPage();

      expect(container).toHaveTextContent('로딩 중...');
    });
  });
});
