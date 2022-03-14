import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: [
        { id: 1, name: '마법사주방' },
      ],
    }));
    jest.clearAllMocks();
  });

  const renderRestaurant = () => render((
    <MemoryRouter>
      <RestaurantsContainer />
    </MemoryRouter>
  ));

  it('render restaurnats', () => {
    const { container } = renderRestaurant();

    expect(container).toHaveTextContent('마법사주방');
  });
});
