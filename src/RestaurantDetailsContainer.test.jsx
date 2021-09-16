import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import given from 'given2';

import RestaurantDetailsContainer from './RestaurantDetailsContainer';

import DETAILS from '../fixtures/restaurantDetails';

describe('RestaurantDetailsContainer', () => {
  beforeEach(() => {
    given('restaurantDetails', () => null);
    useSelector.mockImplementation((selector) => selector({
      restaurantDetails: given.restaurantDetails,
    }));
  });

  context('식당의 정보가 없다면', () => {
    it('Loading..을 보여준다', () => {
      const { container } = render((
        <RestaurantDetailsContainer />
      ));

      expect(container).toHaveTextContent('Loading');
    });
  });

  context('식당의 정보가 있다면', () => {
    it('정보를 보여준다', () => {
      given('restaurantDetails', () => DETAILS);

      const { container } = render((
        <RestaurantDetailsContainer />
      ));

      expect(container).toHaveTextContent('양천주가');
      expect(container).toHaveTextContent('비빔밥');
    });
  });
});
