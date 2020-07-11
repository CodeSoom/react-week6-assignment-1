import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: [
        { id: 1, name: '마법사주방' },
      ],
    }));
  });

  function renderRestaurantsContainer() {
    return render((
      <MemoryRouter>
        <RestaurantsContainer />
      </MemoryRouter>
    ));
  }

  context('display restaurant', () => {
    it('renders restaurant', () => {
      const { container } = renderRestaurantsContainer();

      expect(container).toHaveTextContent('마법사주방');
    });
  });
});
