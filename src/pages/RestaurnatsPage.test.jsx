import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsPage from './RestaurantsPage';

describe('RestaurantsPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

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
  });

  it('renders region buttons', () => {
    const { queryByText } = render((
      <RestaurantsPage />
    ));

    expect(dispatch).toBeCalled();

    expect(queryByText('서울')).not.toBeNull();
  });

  it('renders category buttons', () => {
    const { queryByText } = render((
      <RestaurantsPage />
    ));

    expect(dispatch).toBeCalled();

    expect(queryByText('한식')).not.toBeNull();
  });
});