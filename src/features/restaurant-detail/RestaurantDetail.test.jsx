import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

import restaurantDetail from '../../../fixtures/restaurantDetail';

describe('RestaurantDetail', () => {
  context('with details', () => {
    it('renders menu list', () => {
      const { queryByText } = render((
        <RestaurantDetail
          name={restaurantDetail.name}
          address={restaurantDetail.address}
          menuItems={restaurantDetail.menuItems}
        />
      ));

      expect(queryByText('비빔밥')).not.toBeNull();
    });
  });
  context('without details', () => {
    it("doesn't render", () => {
      const { queryByText } = render((
        <RestaurantDetail />
      ));

      expect(queryByText('비빔밥')).toBeNull();
    });
  });
});
