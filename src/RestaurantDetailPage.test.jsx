import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import RestaurantDetailPage from './RestaurantDetailPage';

function renderRestaurantDetailPage() {
  return render((
    <MemoryRouter>
      <RestaurantDetailPage />
    </MemoryRouter>
  ));
}

describe('RestaurantDetailPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  it('dispatch가 호출됩니다.', () => {
    renderRestaurantDetailPage();

    expect(dispatch).toBeCalled();
  });

  context('done이 false일 때,', () => {
    useSelector.mockImplementation((selector) => selector({
      selectedRestaurantDetail: { done: false, info: null },
    }));

    it('loading 문구가 출력됩니다.', () => {
      const { container } = renderRestaurantDetailPage();

      expect(container).toHaveTextContent('loading');
    });
  });

  context('done이 true일 때,', () => {
    useSelector.mockImplementation((selector) => selector({
      selectedRestaurantDetail: { done: true, info: null },
    }));

    it('loading 문구가 출력됩니다.', () => {
      const { container } = renderRestaurantDetailPage();

      expect(container).toHaveTextContent('unloading');
    });
  });
});
