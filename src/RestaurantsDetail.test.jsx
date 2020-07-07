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
        regions: [{ id: 1, name: '서울' }],
        categories: [{ id: 1, name: '한식' }],
        restaurants: [{ id: 1, name: '마법사주방' }],
      }),
    );
  });

  it('레스토랑 상세 정보가 보인다.', () => {
    const { getByText } = render(<RestaurantsDetail />);

    expect(getByText('홍콩반점')).not.toBeNull();
  });
});
