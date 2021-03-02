import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import RestaurantsContainer from './RestaurantsContainer';

import restaurant from '../fixtures/restaurant';

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();

  const renderRestaurantsContainer = ({ path }) => render((
    <MemoryRouter initialEntries={[path]}>
      <RestaurantsContainer />
    </MemoryRouter>
  ));

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      restaurants: [
        { id: 3, name: '마법사주방' },
      ],
      restaurant,
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders name of the restaurants', () => {
    const { container } = renderRestaurantsContainer({ path: '/restaurants' });

    expect(container).toHaveTextContent('마법사주방');
  });

  it('renders Restaurant Detail', () => {
    const { container, getByText } = renderRestaurantsContainer({ path: '/restaurants' });

    expect(container).toHaveTextContent('마법사주방');

    fireEvent.click(getByText('마법사주방'));

    expect(dispatch).toBeCalled();
  });
});
