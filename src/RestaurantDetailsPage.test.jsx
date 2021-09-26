import { render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import RestaurantDetailsPage from './RestaurantDetailsPage';

describe('RestaurantDetailsPage', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  it('식당 정보를 가져온다', () => {
    const match = { params: { id: 1 } };
    render((
      <RestaurantDetailsPage match={match} />
    ));

    expect(dispatch).toBeCalled();
  });
});
