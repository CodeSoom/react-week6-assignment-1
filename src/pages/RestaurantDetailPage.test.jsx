import { useDispatch, useSelector } from 'react-redux';
// import restaurantDetail from '../../fixtures/restaurantDetail';
import RestaurantDetailPage from './RestaurantDetailPage';
import { render, screen } from '@testing-library/react';

describe('RestaurantDetail', () => {
  // 페이지 이동 시 restaurants id 받기
  // id 받아서 데이터 페칭하기
  // 레스토랑 정보 보여주기
  const dispatch = jest.fn();

  beforeEach(() => {
    // dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) =>
      selector({
        restaurantDetail: {
          id: 1,
          name: '김밥제국',
          information: '서울시 강남구 역삼동',
          menuItems: [
            { id: 1, name: '김밥' },
            { id: 2, name: '라면' },
          ],
          reviews: [{ id: 3, name: '테스트', description: '좋아요' }],
        },
      })
    );
  });

  const renderRestaurantDetailPage = () => render(<RestaurantDetailPage />);

  describe('detail', () => {
    it('restaurant 타이틀이 보인다.', () => {
      const { container } = renderRestaurantDetailPage();
      expect(container).toHaveTextContent('김밥제국');
    });
  });
});
