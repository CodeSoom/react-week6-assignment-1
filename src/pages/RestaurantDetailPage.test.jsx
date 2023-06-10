import { useDispatch, useSelector } from 'react-redux';
import restaurantDetail from '../../fixtures/restaurantDetail';
import RestaurantDetailPage from './RestaurantDetailPage';
import { render, screen } from '@testing-library/react';

describe('RestaurantDetail', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) =>
      selector({
        restaurantDetail,
      })
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

  const renderRestaurantDetailPage = () => render(<RestaurantDetailPage />);

  describe('detail', () => {
    it('restaurant 타이틀이 보인다.', () => {
      const { container } = renderRestaurantDetailPage();
      expect(container).toHaveTextContent('김밥제국');
      // textContents.forEach((text) => {
      //   expect(container).toHaveTextContent(text);
      // });
    });
  });
});
