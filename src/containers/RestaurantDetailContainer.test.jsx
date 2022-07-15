import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RESTAURANT from '../../fixtures/restaurant';

import RestaurantDetailContainer from './RestaurantDetailContainer';

jest.mock('react-redux');

describe('<RestaurantDetailContainer />', () => {
  const renderRestaurantDetailContainer = () => render(<RestaurantDetailContainer />);

  context('with restaurant', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurant: RESTAURANT,
    }));

    it('renders restaurant detail page', () => {
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
