import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantPage from './RestaurantPage';

import restaurant from '../fixtures/restaurant';

describe('RestaurantPage', () => {
  const dispatch = jest.fn();

  function renderRestaurantPage() {
    return render((
      <RestaurantPage
        match={{
          params: { id: restaurant.id }, isExact: true, path: '', url: '',
        }}
      />
    ));
  }

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector(({
      restaurant,
    })));
  });

  context('레스토랑 id가 있으면', () => {
    it('해당 레스토랑 정보를 보여준다.', () => {
      const { getByText } = renderRestaurantPage();

      expect(getByText(restaurant.name)).toBeInTheDocument();
      expect(getByText(`주소: ${restaurant.address}`)).toBeInTheDocument();
    });

    it('dispatch가 호출된다.', () => {
      renderRestaurantPage();
      expect(dispatch).toBeCalled();
    });
  });
});
