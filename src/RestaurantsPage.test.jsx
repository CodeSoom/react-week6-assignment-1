import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantsPage from './RestaurantsPage';

jest.mock('react-redux');

describe('RestaurantsPage', () => {
  beforeEach(() => {
    const dispatch = jest.fn();
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
  it('renders RestaurantsPage', () => {
    const { container } = render(
      <MemoryRouter>
        <RestaurantsPage />
      </MemoryRouter>,
    );

    expect(container).toHaveTextContent('마법사주방');
  });
});
