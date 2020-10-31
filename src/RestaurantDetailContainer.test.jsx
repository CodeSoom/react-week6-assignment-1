import React from 'react';

import { useDispatch } from 'react-redux';

import { MemoryRouter, useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantDetailContainer from './RestaurantDetailContainer';

import RESTAURANT from '../fixtures/restaurant';

test('RestaurantDetailContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  context('with load selected restaurant', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: RESTAURANT,
      }));
    });

    it('renders restaurant with selected restaurant', () => {
      const { container } = render((
        <RestaurantDetailContainer />
      ));

      expect(container).toHaveTextContent('양천주가');
      expect(container).toHaveTextContent('서울 강남구 123456');
    });
  });

  const { container } = render((
    <MemoryRouter>
      <RestaurantDetailPage />
    </MemoryRouter>
  ));

  expect(container).toHaveTextContent('상세');
});
