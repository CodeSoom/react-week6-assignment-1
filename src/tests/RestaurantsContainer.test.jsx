import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import RestaurantsContainer from '../containers/RestaurantsContainer';

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  context('with restaurants mock id and name', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurants: [
          {
            id: 1,
            name: '마법사주방',
          },
        ],
      }));
    });

    it('renders restaurants with mock id and name', () => {
      const { container, getByText } = render((
        <MemoryRouter>
          <RestaurantsContainer />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('마법사주방');

      fireEvent.click(getByText('마법사주방'));

      expect(dispatch).toBeCalled();
    });
  });
});
