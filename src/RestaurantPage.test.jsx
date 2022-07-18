import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import RestaurantPage from './RestaurantPage';

describe('RestaurantPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((state) => state({
      restaurant: {
        id: 1,
        name: '마법사주방',
      },
    }));
  });

  const params = { id: '1' };

  context('with restaurant', () => {
    it('renders name', () => {
      const { container } = render((
        <RestaurantPage params={params} />
      ));

      expect(container).toHaveTextContent('마법사주방');
    });
  });

  context('without restaurant', () => {
    it('shows loading message', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: null,
      }));

      const { container } = render(<RestaurantPage params={params} />);

      expect(dispatch).toBeCalled();

      expect(container).toHaveTextContent('Loading...');
    });
  });
});
