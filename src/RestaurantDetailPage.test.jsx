import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetailPage from './RestaurantDetailPage';

describe('RestaurantDetailPage', () => {
  function renderRestaurantDetailPage() {
    return render((
      <MemoryRouter initialEntries={['/restaurants/1']}>
        <RestaurantDetailPage />
      </MemoryRouter>
    ));
  }

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('with restaurantDetail', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurantDetail: {
          id: 1,
          categoryId: 1,
          name: '양천주가',
          address: '서울 강남구',
          menuItems: [
            {
              id: 1,
              retaurantId: 1,
              name: '탕수육',
            },
          ],
        },
      }));
    });

    it('renders restaurant name, address, and menus', () => {
      const { container } = renderRestaurantDetailPage();

      expect(container).toHaveTextContent('양천주가');
      expect(container).toHaveTextContent('주소: 서울 강남구');
      expect(container).toHaveTextContent('메뉴');
      expect(container).toHaveTextContent('탕수육');
    });
  });

  context('without restaurantDetail', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({}));
    });

    it('renders message', () => {
      const { container } = renderRestaurantDetailPage();

      expect(container).toHaveTextContent('레스토랑 정보가 없어요!');
    });
  });
});
