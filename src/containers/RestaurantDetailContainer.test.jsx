import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import given from 'given2';

import RESTAURANT from '../../fixtures/restaurant';

import RestaurantDetailContainer from './RestaurantDetailContainer';

jest.mock('react-redux');

describe('<RestaurantDetailContainer />', () => {
  given('restaurant', () => null);
  given('loading', () => false);

  useSelector.mockImplementation((selector) => selector({
    restaurant: given.restaurant,
    loading: given.loading,
  }));

  const renderRestaurantDetailContainer = () => render(<RestaurantDetailContainer />);

  context('with loading', () => {
    given('loading', () => true);

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
        menu,
      } = RESTAURANT;

      expect(container).toHaveTextContent(name);
      expect(container).toHaveTextContent(address);
      expect(container).toHaveTextContent('메뉴');

      menu.forEach((item) => {
        expect(getByText(item)).toBeInTheDocument();
      });
    });
  });
});
