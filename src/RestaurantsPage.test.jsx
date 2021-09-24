import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsPage from './RestaurantsPage';

import categories from '../fixtures/categories';
import regions from '../fixtures/regions';

function renderRestaurantsPage() {
  return render((
    <MemoryRouter>
      <RestaurantsPage />
    </MemoryRouter>
  ));
}

describe('RestaurantsPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear(); // dispatch 초기화
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      categories,
      regions,
      restaurants: [{
        id: 1, name: '마법사주방',
      }],
    }));
  });

  it('renders region and category select buttons', () => {
    const { queryByText } = renderRestaurantsPage();

    expect(dispatch).toBeCalled();

    expect(queryByText('서울')).not.toBeNull();
    expect(queryByText('한식')).not.toBeNull();
  });

  it('renders links of restaurants', () => {
    const { container } = renderRestaurantsPage();

    expect(container.innerHTML).toContain('<a href="');
  });
});
