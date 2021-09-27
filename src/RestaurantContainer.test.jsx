import { render } from '@testing-library/react';

import given from 'given2';

import { useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import RESTAURANT from '../fixtures/restaurant';

describe('RestaurantPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation(
      (selector) => selector({ restaurant: given.restaurant }),
    );
  });

  context('with restaurant information', () => {
    it('shows name, address, menus of Restaurant', () => {
      given('restaurant', () => RESTAURANT);

      const { container } = render((
        <RestaurantContainer />
      ));

      expect(container).toHaveTextContent('양천주가');
      expect(container).toHaveTextContent('서울 강남구 123456');
      expect(container).toHaveTextContent('비빔밥');
      expect(container).toHaveTextContent('짬뽕');
      expect(container).toHaveTextContent('탕수육');
    });
  });

  context('without restaurant information', () => {
    it('shows loading message', () => {
      given('restaurant', () => undefined);

      const { container } = render((
        <RestaurantContainer />
      ));

      expect(container).toHaveTextContent('is Loading');
    });
  });
});
