import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import RestaurantDetailPage from './RestaurantDetailPage';

describe('RestaurantDetailPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders restaurants detail', () => {
    const { queryByText } = render((
      <MemoryRouter>
        <RestaurantDetailPage />
      </MemoryRouter>
    ));

    expect(queryByText('레스토랑 리스트')).not.toBeNull();
  });
});
