import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router';

import RestaurantContainer from '.';

import restaurant from '../../../fixtures/restaurant';

jest.mock('react-redux');

describe('RestaurantContainer', () => {
  function renderRestaurantContainer() {
    return render((
      <MemoryRouter>
        <RestaurantContainer />
      </MemoryRouter>
    ));
  }

  context('with restaurant', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurant,
      }));
    });

    it('renders "메뉴" title', () => {
      const { getByRole } = renderRestaurantContainer();

      expect(getByRole('heading', { name: '메뉴' })).toBeInTheDocument();
    });

    it('renders address', () => {
      const { getByText } = renderRestaurantContainer();

      expect(getByText('주소: 양천주가 in 서울 강남구 123456')).toBeInTheDocument();
    });

    it('renders menus', () => {
      const { getByText } = renderRestaurantContainer();

      restaurant.menuItems.forEach(({ name }) => {
        expect(getByText(name)).toBeInTheDocument();
      });
    });
  });

  context('without restaurant', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: {},
      }));
    });

    it('renders loading', () => {
      const { getByText } = renderRestaurantContainer();

      expect(getByText('Loading...')).toBeInTheDocument();
    });
  });
});
