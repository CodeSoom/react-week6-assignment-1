import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import RestaurantsPage from './RestaurantsPage';
import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

describe('RestaurantsPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions,
    categories,
    restaurants,
  }));

  function renderRestaurantsPage() {
    return render((
      <MemoryRouter>
        <RestaurantsPage />
      </MemoryRouter>));
  }

  it('RestaurantsPage를 렌더링한다.', () => {
    const { container } = renderRestaurantsPage();

    expect(container).toHaveTextContent('서울');
    expect(container).toHaveTextContent('한식');
  });
});
