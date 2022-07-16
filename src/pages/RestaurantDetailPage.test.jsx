import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RESTAURANT from '../../fixtures/restaurant';

import RestaurantDetailPage from './RestaurantDetailPage';

jest.mock('react-redux');

describe('<RestaurantDetailPage />', () => {
  const renderRestaurantDetailPage = () => render(<RestaurantDetailPage />);

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
