import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';

import restaurant from '../fixtures/restaurant';

describe('RestaurantDetail', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((state) => state({ restaurant }));
  });

  const params = { id: '1' };

  it('dispatch가 실행된다.', () => {
    render((<RestaurantDetail params={params} />));

    expect(dispatch).toBeCalled();
  });

  it('레스토랑 상세 정보를 보여준다.', () => {
    const { queryByText } = render((
      <RestaurantDetail params={params} />
    ));

    expect(dispatch).toBeCalled();

    expect(queryByText('양천주가')).not.toBeNull();
  });
});
