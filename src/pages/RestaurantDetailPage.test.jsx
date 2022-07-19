import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import { loadRestaurant } from '../actions';

import RESTAURANT from '../../fixtures/restaurant';

import RestaurantDetailPage from './RestaurantDetailPage';

jest.mock('react-redux');
jest.mock('../actions');

describe('<RestaurantDetailPage />', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    dispatch.mockClear();
  });

  const renderRestaurantDetailPage = () => render(<RestaurantDetailPage />);

  it('dispatch loadRestaurant', () => {
    renderRestaurantDetailPage();

    expect(loadRestaurant).toBeCalled();
  });

  context('with restaurant', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: RESTAURANT,
      }));
    });

    it('renders restaurant detail page', () => {
      const { container, getByText } = renderRestaurantDetailPage();

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
});
