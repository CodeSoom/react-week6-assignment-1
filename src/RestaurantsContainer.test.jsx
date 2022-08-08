import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('with restaurants', () => {
    it('RestaurantsContainer', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurants: [
          { id: 1, name: '마법사주방' },
        ],
      }));

      const { container } = render((
        <MemoryRouter>
          <RestaurantsContainer />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('마법사주방');
    });
  });

  it('listens to click on a restaurant', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: [
        { id: 1, name: '마법사주방' },
      ],
    }));

    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    const { getByText } = render((
      <MemoryRouter>
        <RestaurantsContainer />
      </MemoryRouter>
    ));

    fireEvent.click(getByText('마법사주방'));

    expect(dispatch).toBeCalled();
  });
});
