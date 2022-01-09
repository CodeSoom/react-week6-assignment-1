import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

describe('RestaurantDetail', () => {
  const renderRestaurantDetail = ({ restaurant }) => render((
    <RestaurantDetail restaurant={restaurant} />
  ));

  it('renders restaurant\'s name, address and menu', () => {
    const restaurantStub = {
      id: 1,
      name: '김밥천국',
      address: '서울특별시 강남구 역삼동',
      menuItems: [{ id: 1, name: '치즈돈까스' }],
    };

    const { getByText } = renderRestaurantDetail({ restaurant: restaurantStub });

    expect(getByText('김밥천국')).toBeInTheDocument();
    expect(getByText('서울특별시 강남구 역삼동')).toBeInTheDocument();
    expect(getByText('치즈돈까스')).toBeInTheDocument();
  });

  context('there is no restaurant', () => {
    const { getByText } = renderRestaurantDetail({ restaurant: null });

    expect(getByText('로딩중...')).toBeInTheDocument();
  });
});
