import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import RestaurantDetailPage from './RestaurantDetailPage';

import DETAIL from '../../../fixtures/restaurantDetail';

describe('DetailPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      detail: DETAIL,
    }));
  });

  const detailRender = () => render((
    <MemoryRouter>
      <RestaurantDetailPage />
    </MemoryRouter>
  ));

  context('with restaurant detail', () => {
    it('render detail page', () => {
      const { container } = detailRender();

      expect(container).toHaveTextContent(DETAIL.name);
      expect(container).toHaveTextContent(DETAIL.address);
    });
  });

  context('without restaurant detail', () => {
    it('render loading', () => {
      const { container } = detailRender();

      expect(container).toHaveTextContent('Loading...');
    });
  });
});
