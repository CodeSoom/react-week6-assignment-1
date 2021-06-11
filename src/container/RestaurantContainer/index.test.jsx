import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router';
import given from 'given2';

import RestaurantContainer from '.';

import restaurant from '../../../fixtures/restaurant';

jest.mock('react-redux');

describe('RestaurantContainer', () => {
  given('!state', () => useSelector.mockImplementation((selector) => selector({
    restaurant: given.restaurant,
  })));

  beforeEach(() => {
    given('restaurant', () => restaurant);
  });

  function renderRestaurantContainer() {
    return render((
      <MemoryRouter>
        <RestaurantContainer />
      </MemoryRouter>
    ));
  }

  it('renders "메뉴" title', () => {
    const { getByRole } = renderRestaurantContainer();

    expect(getByRole('heading', { name: '메뉴' })).toBeInTheDocument();
  });

  context('with menuItems', () => {
    beforeEach(() => {
      given('restaurant', () => restaurant);
    });

    it('renders menus', () => {
      const { getByText } = renderRestaurantContainer();

      restaurant.menuItems.forEach(({ name }) => {
        expect(getByText(name)).toBeInTheDocument();
      });
    });
  });

  context('without menuItems', () => {
    beforeEach(() => {
      given('restaurant', () => ({
        menuItems: [],
        information: '',
      }));
    });

    it('renders text', () => {
      const { getByText } = renderRestaurantContainer();

      expect(getByText('메뉴를 준비중입니다.')).toBeInTheDocument();
    });
  });

  context('with information', () => {
    beforeEach(() => {
      given('restaurant', () => restaurant);
    });

    it('renders address', () => {
      const { getByText } = renderRestaurantContainer();

      expect(getByText('주소: 양천주가 in 서울 강남구 123456')).toBeInTheDocument();
    });
  });

  context('without information', () => {
    beforeEach(() => {
      given('restaurant', () => ({
        menuItems: [],
        information: '',
      }));
    });

    it('renders text', () => {
      const { getByText } = renderRestaurantContainer();

      expect(getByText('주소를 준비중입니다.')).toBeInTheDocument();
    });
  });
});
