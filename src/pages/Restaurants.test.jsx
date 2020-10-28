import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import Restaurants from './Restaurants';

describe('Restaurants Page', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories: [],
      restaurants: [],
    }));
  });

  it('renders App', () => {
    const { queryByText } = render((
      <Restaurants />
    ));

    expect(dispatch).toBeCalled();
    expect(queryByText('서울')).not.toBeNull();
    expect(queryByText('한식')).not.toBeNull();
  });
});
