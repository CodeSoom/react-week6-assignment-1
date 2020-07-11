import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantDetailPage from './RestaurantDetailPage';

import YANGCHEON_JUGA from '../fixtures/restaurant';

describe('RestaurantDetailPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  context('레스토랑 상세가 있으면', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: YANGCHEON_JUGA,
      }));
    });

    it('레스토랑 상세 정보화면이 표시된다.', () => {
      const { container } = render((
        <MemoryRouter>
          <RestaurantDetailPage />
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
          <RestaurantDetailPage />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('Loading');
    });
  });
});
