import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsPage from './RestaurantsPage';

import REGIONS from '../fixtures/regions';
import CATEGORIES from '../fixtures/categories';
import RESTAURANTS from '../fixtures/restaurants';

describe('RestaurantsPage', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions: REGIONS,
      categories: CATEGORIES,
      restaurants: RESTAURANTS,
    }));
  });

  it('식당 리스트를 보여준다', () => {
    const { queryByText } = render((
      <MemoryRouter>
        <RestaurantsPage />
      </MemoryRouter>
    ));

    expect(dispatch).toBeCalled();

    expect(queryByText('서울')).not.toBeNull();
    expect(queryByText('한식')).not.toBeNull();
    expect(queryByText('김밥제국')).not.toBeNull();
  });
});
