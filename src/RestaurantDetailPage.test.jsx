import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetailPage from './RestaurantDetailPage';

describe('RestaurantDetailPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      name: '식당1',
      address: '서울시 주소 12',
      menuItems: [
        {
          id: 1,
          restaurantId: 1,
          name: '메뉴1',
        },
        {
          id: 2,
          restaurantId: 1,
          name: '메뉴2',
        },
      ],
      reviews: [
        {
          id: 1,
          restaurantId: 1,
          name: '테스터',
          score: 5,
          description: '댓글1',
        },
        {
          id: 2,
          restaurantId: 1,
          name: '테스터',
          score: 1,
          description: '댓글2',
        },
      ],
    }));
  });

  it('renders restaurant detail', () => {
    const { container } = render(<RestaurantDetailPage />);

    expect(container).toHaveTextContent('식당1');
    expect(container).toHaveTextContent('서울시 주소 12');
    expect(container).toHaveTextContent('메뉴');
    expect(container).toHaveTextContent('메뉴1');
    expect(container).toHaveTextContent('메뉴2');
    expect(container).toHaveTextContent('리뷰');
    expect(container).toHaveTextContent('댓글1');
    expect(container).toHaveTextContent('댓글2');
  });

  it('calls dispatch', () => {
    render(<RestaurantDetailPage />);

    expect(dispatch).toBeCalled();
  });
});
