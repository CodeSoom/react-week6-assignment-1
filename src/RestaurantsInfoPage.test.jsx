import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import { MemoryRouter, Route, Routes } from 'react-router-dom';

import RestaurantsInfoPage from './RestaurantsInfoPage';

import restaurantInfo from '../fixtures/restaurantInfo';

describe('RestaurantsInfoPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const renderRestaurantInfoPage = (pathname) => render((
    <MemoryRouter initialEntries={[pathname]}>
      <Routes>
        <Route path="/restaurants/:id" element={<RestaurantsInfoPage />} />
      </Routes>
    </MemoryRouter>
  ));

  context('레스토랑 데이터가 있을 시', () => {
    it('레스토랑 정보가 랜더링된다', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurantInfo,
      }));

      const { queryByText } = renderRestaurantInfoPage('/restaurants/1');

      expect(dispatch).toBeCalled();

      expect(queryByText(/양천주가/)).not.toBeNull();
    });
  });

  context('레스토랑 데이터가 없을 시', () => {
    it('로딩 문구가 랜더링된다', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurantInfo: null,
      }));

      const { container } = renderRestaurantInfoPage('/restaurants/-1');

      expect(dispatch).toBeCalled();

      expect(container).toHaveTextContent('Loading...');
    });
  });
});
