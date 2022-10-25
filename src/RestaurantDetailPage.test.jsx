import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantDetailPage from './RestaurantDetailPage';

import RESTAURANTDETAIL from '../fixtures/restaurantDetail';

describe('RestaurantDetailPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      restaurantDetail: RESTAURANTDETAIL,
    }));
  });

  it('dispatches action', () => {
    render(<RestaurantDetailPage restaurantId="1" />);

    expect(dispatch).toBeCalled();
  });

  context('with restaurant data', () => {
    it('renders restaurant detail page', () => {
      const { container } = render((
        <RestaurantDetailPage restaurantId="1" />
      ));

      expect(container).toHaveTextContent(/메뉴/);
    });
  });

  context('without restaurant data', () => {
    it('renders restaurant detail page', () => {
      const { container } = render((
        <RestaurantDetailPage restaurantId="" />
      ));

      expect(container).toHaveTextContent('loading');
    });
  });
});
