import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import RestaurantPage from './RestaurantPage';

import RESTAURANT from '../fixtures/restaurant';

describe('RestaurantPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  useSelector.mockImplementation((selector) => selector({
    restaurant: RESTAURANT,
  }));

  it('shows name, address, menus of Restaurant', () => {
    const { container } = render((
      <MemoryRouter initialEntries={['/restaurants/1']}>
        <RestaurantPage />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('양천주가');
  });
});
