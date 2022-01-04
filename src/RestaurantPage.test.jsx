import React from 'react';

import { render } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import RestaurantPage from './RestaurantPage';

describe('RestaurantPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  it('set restaurant information', () => {
    const { container } = render(<RestaurantPage />);

    expect(container).toHaveTextContent('레스토랑 이름');
    expect(container).toHaveTextContent('메뉴 1번');
  });
});
