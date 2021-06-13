import { render } from '@testing-library/react';
import given from 'given2';

import RestaurantDetail from '.';

import restaurant from '../../../fixtures/restaurant';

jest.mock('react-redux');

describe('RestaurantDetail', () => {
  beforeEach(() => {
    given('restaurant', () => restaurant);
  });

  function renderRestaurantDetail() {
    return render((
      <RestaurantDetail restaurant={given.restaurant} />
    ));
  }

  it('renders "메뉴" title', () => {
    const { getByRole } = renderRestaurantDetail();

    expect(getByRole('heading', { name: '메뉴' })).toBeInTheDocument();
  });

  context('with menuItems', () => {
    it('renders menus', () => {
      const { getByText } = renderRestaurantDetail();

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

    it('renders no menu items message', () => {
      const { getByText } = renderRestaurantDetail();

      expect(getByText('메뉴를 준비중입니다.')).toBeInTheDocument();
    });
  });

  context('with information', () => {
    it('renders address', () => {
      const { getByText } = renderRestaurantDetail();

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

    it('renders no address message', () => {
      const { getByText } = renderRestaurantDetail();

      expect(getByText('주소를 준비중입니다.')).toBeInTheDocument();
    });
  });
});
