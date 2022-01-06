import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetailPage from './RestaurantDetailPage';

import DETAIL from '../../fixtures/restaurantDetail';

describe('DetailPage', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  const detailRender = () => render((
    <MemoryRouter>
      <RestaurantDetailPage />
    </MemoryRouter>
  ));

  context('with restaurant detail', () => {
    it('render detail page', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurantDetail: DETAIL,
      }));

      const { container } = detailRender();

      expect(container).toHaveTextContent(DETAIL.name);
      expect(container).toHaveTextContent(DETAIL.address);
    });
  });

  context('without restaurant detail', () => {
    it('render loading', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurantDetail: null,
      }));
      const { container } = detailRender();

      expect(container).toHaveTextContent('Loading...');
    });
  });
});
