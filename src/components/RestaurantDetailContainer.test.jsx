import { useDispatch, useSelector } from 'react-redux';
import restaurantDetail from '../../fixtures/restaurantDetail';
import RestaurantDetailContainer from './RestaurantDetailContainer';
import { render } from '@testing-library/react';

describe('RestaurantDetail', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    // dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) =>
      selector({ restaurantDetail })
    );
  });

  const renderRestaurantDetailContainer = () =>
    render(<RestaurantDetailContainer />);

  describe('detail', () => {
    it('restaurant 타이틀이 보인다.', () => {
      const { container } = renderRestaurantDetailContainer();
      expect(container).toHaveTextContent('김밥제국');
    });
  });
});
