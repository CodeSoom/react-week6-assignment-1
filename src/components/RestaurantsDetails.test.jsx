import { render } from '@testing-library/react';

import restaurantsDetails from '../../fixtures/restaurantsDetails';

import RestaurantsDetails from './RestaurantsDetails';

function renderRestaurantsDetails(details) {
  return (
    render(<RestaurantsDetails restaurantsDetails={details} />)
  );
}

describe('RestaurantDetail', () => {
  context('식당이 있는경우', () => {
    it('식당의 정보를 표시한다', () => {
      const { queryByText } = renderRestaurantsDetails(restaurantsDetails);

      expect(queryByText('양천주가')).toBeInTheDocument();
    });
  });

  context('식당이 없는경우 ', () => {
    it('정보가 없음을 확인한다', () => {
      const { queryByText } = renderRestaurantsDetails(undefined);

      expect(queryByText(/Now is loading/)).toBeInTheDocument();
    });
  });
});
