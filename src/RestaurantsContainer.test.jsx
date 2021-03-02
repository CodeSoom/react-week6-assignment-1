import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '마법사주방' },
      { id: 2, name: '성전떡볶이' },
    ],
  }));

  it('식당목록을 보여준다.', () => {
    const { container, queryByText } = render(
      <MemoryRouter>
        <RestaurantsContainer />
      </MemoryRouter>,
    );

    expect(container).toHaveTextContent('마법사주방');
    expect(container).toHaveTextContent('성전떡볶이');
    expect(queryByText('마법사주방').getAttribute('href')).toBe('/restaurants/1');
    expect(queryByText('성전떡볶이').getAttribute('href')).toBe('/restaurants/2');
  });
});
