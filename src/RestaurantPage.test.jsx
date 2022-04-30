import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import RestaurantPage from './RestaurantPage';

describe('RestaurantPage', () => {
  beforeEach(() => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        restaurantId: 1,
        name: '마법사주방',
      },
    }));
  });

  it('renders name of restaurant', () => {
    const params = { restaurantId: '1' };

    const { container } = render(
      <MemoryRouter initialEntries={['/restaurants/1']}>
        <RestaurantPage params={params} />
      </MemoryRouter>,
    );

    expect(container).toHaveTextContent('레스토랑 1');
  });
});
