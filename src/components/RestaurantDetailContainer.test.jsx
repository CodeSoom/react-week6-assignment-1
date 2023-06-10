import { useDispatch, useSelector } from 'react-redux';
import restaurantDetail from '../../fixtures/restaurantDetail';
import RestaurantDetailContainer from './RestaurantDetailContainer';
import { render } from '@testing-library/react';

describe('RestaurantDetail', () => {
  const dispatch = jest.fn();

  const renderRestaurantDetailContainer = () =>
    render(<RestaurantDetailContainer />);

  describe('불러온 레스토랑 목록이 없을 때', () => {
    beforeEach(() => {
      useDispatch.mockImplementation(() => dispatch);
      useSelector.mockImplementation((selector) =>
        selector({
          restaurantDetail: null,
        })
      );
    });

    it('로딩 메시지가 렌더링된다.', () => {
      const { container } = renderRestaurantDetailContainer();

      expect(container).toHaveTextContent('Loading...');
    });
  });

  describe('불러온 레스토랑이 있을 때', () => {
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
    it('restaurant 정보가 보인다.', () => {
      const { container } = renderRestaurantDetailContainer();
      textContents.forEach((text) => {
        expect(container).toHaveTextContent(text);
      });
    });
  });
});
