import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantDetailContainer from './RestaurantDetailContainer';

import restaurant from '../fixtures/restaurant';

describe('RestaurantDetailContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  context('레스토랑 상세가 있으면', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurant,
      }));
    });

    it('레스토랑 상세 정보화면이 표시된다.', () => {
      const { container } = render((
        <MemoryRouter>
          <RestaurantDetailContainer />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('양천주가');
    });
  });

  context('레스토랑 상세가 없으면', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: null,
      }));
    });

    it('loading... 문구가 뜨게된다.', () => {
      const { container } = render((
        <MemoryRouter>
          <RestaurantDetailContainer />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('Loading');
    });
  });
});
