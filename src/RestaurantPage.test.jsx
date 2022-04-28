import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import RestaurantPage from './RestaurantPage';

import RESTAURANT from '../fixtures/restaurant';

describe('restaurant', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurant: RESTAURANT,
  }));

  it('renders the restaurant address and menu', () => {
    const { container } = render((
      <MemoryRouter>
        <RestaurantPage />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('서울 강남구');
    expect(container).toHaveTextContent('탕수육');
    expect(container).toHaveTextContent('팔보채');
  });
});
