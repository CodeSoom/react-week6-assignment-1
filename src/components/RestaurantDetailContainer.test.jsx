import { useDispatch, useSelector } from 'react-redux';
import restaurantDetail from '../../fixtures/restaurantDetail';
import RestaurantDetailContainer from './RestaurantDetailContainer';
import { render } from '@testing-library/react';

describe('RestaurantDetail', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) =>
      selector({ restaurantDetail })
    );
  });

  const textContents = [
    '김밥제국',
    '서울시 강남구 역삼동',
    '김밥',
    '라면',
    '테스트',
    '좋아요',
  ];

  const renderRestaurantDetailContainer = () =>
    render(<RestaurantDetailContainer />);

  describe('detail', () => {
    it('restaurant 정보가 보인다.', () => {
      const { container } = renderRestaurantDetailContainer();
      textContents.forEach((text) => {
        expect(container).toHaveTextContent(text);
      });
    });
  });
});
