import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';

describe('RestaurantDetail', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    useDispatch.mockImplementation(() => dispatch);
  });

  it('레스토랑 상세 정보를 보여준다.', () => {
    const params = { id: '1' };

    const { queryByText } = render((
      <RestaurantDetail params={params} />
    ));

    expect(dispatch).toBeCalled();

    expect(queryByText('레스토랑 1')).not.toBeNull();
  });
});
