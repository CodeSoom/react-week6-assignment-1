import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantsPage from './RestaurantsPage';

describe('RestaurantsPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
    ],
    categories: [
      { id: 1, name: '한식' },
    ],
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  it('renders the home page', () => {
    const { queryByText } = render((
      <RestaurantsPage />
    ));

    expect(dispatch).toBeCalled();

    expect((queryByText('서울'))).not.toBeNull();
    expect((queryByText('서울'))).not.toBeNull();
    expect((queryByText('서울'))).not.toBeNull();
  });
});
