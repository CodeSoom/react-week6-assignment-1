import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import { render } from '@testing-library/react';

import RestaurantDetailPage from './RestaurantDetailPage';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));

describe('RestaurantDetailPage', () => {
  it('render loading...', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useParams.mockReturnValue({ id: '1' });

    const { container } = render((
      <RestaurantDetailPage />
    ));

    expect(container).toHaveTextContent('loading...');
  });

  it('load dispatch', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useParams.mockReturnValue({ id: '1' });

    render((
      <RestaurantDetailPage />
    ));

    expect(dispatch).toBeCalled();
  });

  it('render restaurant name', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant: { id: 1, name: '양천주가' },
    }));
    useParams.mockReturnValue({ id: '1' });

    const { container } = render((
      <RestaurantDetailPage />
    ));

    expect(container).toHaveTextContent('양천주가');
  });
});
