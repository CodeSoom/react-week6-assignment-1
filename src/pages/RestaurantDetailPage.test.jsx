import { useDispatch, useSelector } from 'react-redux';
import RESTAURANTDETAIL from '../../fixtures/restaurantDetail';
import RestaurantDetailPage from './RestaurantDetailPage';

useDispatch;

describe('RestaurantDetail', () => {
  // 페이지 이동 시 restaurants id 받기
  // id 받아서 데이터 페칭하기

  const dispatch = jest.fn();

  const renderRestaurantDetailPage = render(<RestaurantDetailPage />);

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) =>
      selector({ title: '코코식당' })
    );
  });

  describe('detail', () => {
    it('restaurant 타이틀이 보인다.', () => {
      const { container } = renderRestaurantDetailPage;
      expect(container).toHaveTextContent('코코식당');
    });
  });
});
