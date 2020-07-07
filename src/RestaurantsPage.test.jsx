import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import RestaurantsPage from './RestaurantsPage';

jest.mock('react-redux');

describe('RestaurantsPage', () => {
  it('renders RestaurantsPage', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: [
        { id: 1, name: '마법사주방' },
      ],
    }));

    const { container } = render(
      <MemoryRouter>
        <RestaurantsPage />
      </MemoryRouter>,
    );

    expect(container).toHaveTextContent('마법사주방');
  });
});
