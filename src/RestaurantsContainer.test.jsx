import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import {
  BrowserRouter,
} from 'react-router-dom';

import RestaurantsContainer from './RestaurantsContainer';

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
      const { container } = render((
        <BrowserRouter>
          <RestaurantsContainer />
        </BrowserRouter>
      ));

      expect(container).toHaveTextContent('마법사주방');
    });
  });
});
