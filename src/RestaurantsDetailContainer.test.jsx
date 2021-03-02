import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsDetailContainer from './RestaurantsDetailContainer';

jest.mock('react-redux');

describe('RestaurantsDetailContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      restaurantsDetail: {
        id: 1,
        name: '마법사 주방',
        address: '서울시 강남구 강남대로 94길 9',
        menuItems: [
          {
            id: 14,
            restaurantsId: 3,
            name: '맛나는거',
          },
          {
            id: 15,
            restaurantsId: 3,
            name: '짠거',
          },
        ],
      },
    }));
  });

  it('화면이 로딩될 때 자세한 레스토랑 정보를 불러와 state를 업데이트한다.', () => {
    render(<RestaurantsDetailContainer match={{ params: { id: 1 } }} />);

    expect(dispatch).toBeCalled();
  });

  it('화면에 레스토랑의 자세한 정보들을 보여준다.', () => {
    const { queryByText } = render(<RestaurantsDetailContainer match={{ params: { id: 1 } }} />);

    expect(queryByText(/마법사 주방/)).toBeInTheDocument();
    expect(queryByText(/서울시 강남구 강남대로 94길 9/)).toBeInTheDocument();
    expect(queryByText(/맛나는거/)).toBeInTheDocument();
    expect(queryByText(/짠거/)).toBeInTheDocument();
  });
});
