import React from 'react';

import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import { render } from '@testing-library/react';

import RestaurantDetailPage from './RestaurantDetailPage';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));

describe('RestaurantDetailPage', () => {
  it('render name', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useParams.mockReturnValue({ id: '1' });

    const { container } = render((
      <RestaurantDetailPage />
    ));

    expect(container).toHaveTextContent('restaurant 1');
  });
});
