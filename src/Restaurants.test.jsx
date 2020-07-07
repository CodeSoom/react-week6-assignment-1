import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions: [{ id: 1, name: '서울' }],
      categories: [{ id: 1, name: '한식' }],
      restaurants: [{ id: 1, name: '마법사주방' }],
    }));
  });

  it('dispatch가 호출된다.', () => {
    render(<Restaurants />, { wrapper: MemoryRouter });
    expect(dispatch).toBeCalled();
  });
  it('지역과 카테고리 버튼이 있다.', () => {
    const { queryByText } = render(<Restaurants />, { wrapper: MemoryRouter });

    expect(queryByText('서울')).not.toBeNull();
    expect(queryByText('한식')).not.toBeNull();
  });
});
