import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Restaurants from '../Restaurants';

import { restaurants } from '../../../../fixtures';

describe('Restaurants', () => {
  const handleClick = jest.fn();

  const renderRestaurants = ({ path }) => render((
    <MemoryRouter initialEntries={[path]}>
      <Restaurants
        restaurants={restaurants}
        handleClick={handleClick}
      />
    </MemoryRouter>
  ));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders restaurants', () => {
    const { queryByText } = renderRestaurants({ path: '/restaurants' });

    expect(queryByText('김밥제국')).not.toBeNull();
  });

  it('calls handleClick', () => {
    const { queryByText } = renderRestaurants({ path: '/restaurants' });

    fireEvent.click(queryByText('김밥제국'));

    expect(handleClick).toBeCalled();
  });
});
