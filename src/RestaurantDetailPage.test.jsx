import React from 'react';

import { useParams } from 'react-router-dom';

import { render } from '@testing-library/react';

import RestaurantDetailPage from './RestaurantDetailPage';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));

jest.mock('react-router-dom');

describe('RestaurantDetailPage', () => {
  it('render name', () => {
    useParams.mockReturnValue({ id: '1' });

    const { container } = render((
      <RestaurantDetailPage />
    ));

    expect(container).toHaveTextContent('restaurant 1');
  });
});
