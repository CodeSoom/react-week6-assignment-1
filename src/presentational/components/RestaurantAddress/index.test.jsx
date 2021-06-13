import { render } from '@testing-library/react';
import given from 'given2';

import RestaurantAddress from '.';

import restaurant from '../../../../fixtures/restaurant';

jest.mock('react-redux');

describe('RestaurantAddress', () => {
  function renderRestaurantAddress() {
    return render((
      <RestaurantAddress address={given.address} />
    ));
  }

  context('with information', () => {
    beforeEach(() => {
      given('address', () => restaurant.information);
    });

    it('renders address', () => {
      const { getByText } = renderRestaurantAddress();

      expect(getByText('주소: 양천주가 in 서울 강남구 123456')).toBeInTheDocument();
    });
  });

  context('without information', () => {
    beforeEach(() => {
      given('address', () => '');
    });

    it('renders no address message', () => {
      const { getByText } = renderRestaurantAddress();

      expect(getByText('주소를 준비중입니다.')).toBeInTheDocument();
    });
  });
});
