import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  it('레스토랑 목록이 표시되고 클릭할 수 있다.', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurants: [
        { id: 1, name: '마법사주방' },
      ],
    }));

    const { container, getByText } = render((
      <RestaurantsContainer />
    ));

    expect(container).toHaveTextContent('마법사주방');

    fireEvent.click(getByText('마법사주방'));

    expect(dispatch).toBeCalled();
  });
});
