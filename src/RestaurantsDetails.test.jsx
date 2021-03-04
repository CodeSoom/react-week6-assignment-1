import React from 'react';

import { render } from '@testing-library/react';

import RestaurantsDetails from './RestaurantsDetails';

import restaurantsDetails from '../fixtures/restaurantsDetails';

describe('RestaurantsDetails', () => {
  context('식당이 없는 경우,', () => {
    it('정보가 없음을 확인합니다.', () => {
      const emptyDetails = {
        id: 0,
        name: '',
        address: '',
        menus: [],
      };

      const { queryByText } = render(<RestaurantsDetails restaurantsDetails={emptyDetails} />);

      expect(queryByText(/Now is loading/)).not.toBeNull();
    });
  });

  context('식당이 있는 경우,', () => {
    it('식당의 상세 정보를 표시합니다.', () => {
      const { queryByText } = render(<RestaurantsDetails
        restaurantsDetails={restaurantsDetails}
      />);

      expect(queryByText(/양천주가/)).not.toBeNull();
      expect(queryByText(/서울 강남구/)).not.toBeNull();
      expect(queryByText(/탕수육/)).not.toBeNull();
      expect(queryByText(/짜장면/)).not.toBeNull();
    });
  });
});
