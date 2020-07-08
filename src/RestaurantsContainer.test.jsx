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

  function renderApp() {
    return render((
      <MemoryRouter>
        <RestaurantsContainer />
      </MemoryRouter>
    ));
  }

  context('display restaurant', () => {
    it('renders restaurant', () => {
      const { container } = renderApp();

      expect(container).toHaveTextContent('마법사주방');
    });
  });
});
