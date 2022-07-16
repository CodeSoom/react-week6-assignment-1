import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import given from 'given2';

import RESTAURANT from '../../fixtures/restaurant';

import RestaurantDetailContainer from './RestaurantDetailContainer';

jest.mock('react-redux');

describe('<RestaurantDetailContainer />', () => {
  given('restaurant', () => null);
  given('isFetchingDetail', () => false);

  useSelector.mockImplementation((selector) => selector({
    restaurant: given.restaurant,
    isFetchingDetail: given.isFetchingDetail,
  }));

  const renderRestaurantDetailContainer = () => render(<RestaurantDetailContainer />);

  context('with isFetchingDetail', () => {
    given('isFetchingDetail', () => true);

    it('renders loading message', () => {
      const { container, queryByText } = renderRestaurantDetailContainer();

      expect(container).toHaveTextContent('loading');
      expect(queryByText('메뉴')).toBeNull();
    });
  });

  context('with restaurant', () => {
    given('restaurant', () => RESTAURANT);

    it('renders restaurant info', () => {
      const { container, getByText } = renderRestaurantDetailContainer();

      const {
        name,
        address,
        menuItems,
      } = RESTAURANT;

      expect(container).toHaveTextContent(name);
      expect(container).toHaveTextContent(address);
      expect(container).toHaveTextContent('메뉴');

      menuItems.forEach((menu) => {
        expect(getByText(menu.name)).toBeInTheDocument();
      });
    });
  });

  context('without restaurant', () => {
    given('restaurant', () => null);

    it('renders loading message', () => {
      const { container } = renderRestaurantDetailContainer();

      expect(container).toHaveTextContent('loading');
    });
  });

  context('without isFetchingDetail and with empty restaurant', () => {
    given('restaurant', () => ({}));
    given('isFetchingDetail', () => false);

    it('renders fail message', () => {
      const { container } = renderRestaurantDetailContainer();

      expect(container).toHaveTextContent('레스토랑 정보 조회에 실패했습니다.');
    });
  });
});
