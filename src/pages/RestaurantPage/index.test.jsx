import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router';

import RestaurantPage from '.';

import restaurant from '../../../fixtures/restaurant';

jest.mock('react-redux');

describe('RestaurantsPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant,
    }));
  });

  function renderRestaurantPage() {
    return render((
      <MemoryRouter>
        <RestaurantPage />
      </MemoryRouter>
    ));
  }

  it('renders "메뉴" title', () => {
    const { getByRole } = renderRestaurantPage();

    expect(getByRole('heading', { name: '메뉴' })).toBeInTheDocument();
  });

  it('renders menus', () => {
    const { getByText } = renderRestaurantPage();

    restaurant.menuItems.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });

  it('loads restaurant', () => {
    renderRestaurantPage();

    expect(dispatch).toBeCalled();
  });
});
