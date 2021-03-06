import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  it('식당을 표시합니다.', () => {
    const { container, queryByText } = render(
      <BrowserRouter initialEntries={['/restaurants/1']}>
        <RestaurantsContainer />
      </BrowserRouter>,
    );

    expect(queryByText(/마법사주방/).getAttribute('href')).toBe('/restaurants/1');
    expect(container).toHaveTextContent('마법사주방');
  });
});
