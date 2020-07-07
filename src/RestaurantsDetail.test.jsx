import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import RestaurantsDetail from './RestaurantsDetail';

describe('RestaurantsDetail', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) =>
      selector({
        selectedRestaurant: {
          id: 1,
          name: '홍콩반점',
        },
      }),
    );
  });

  it('레스토랑 상세 정보가 보인다.', () => {
    const { getByText } = render(<RestaurantsDetail />);

    expect(getByText('홍콩반점')).not.toBeNull();
  });
});
