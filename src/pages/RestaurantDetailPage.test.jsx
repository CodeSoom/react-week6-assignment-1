import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import restaurantDetails from '../../fixtures/restaurantDetails';

import RestaurantDetailPage from './RestaurantDetailPage';

const dispatch = jest.fn();

describe('RestaurantDetailPage', () => {
  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurantDetails,
    }));
  });

  it('dispatch를 호출한다.', () => {
    expect(dispatch).toBeCalled();
  });

  it('레스토랑 이름인 페이지 제목이 보인다.', async () => {
    const { findByRole } = render(<RestaurantDetailPage />);

    expect(await findByRole('heading', { level: 2 })).toHaveTextContent('마법사주방');
  });

  it('레스토랑 주소가 보인다.', async () => {
    const { findByText } = render(<RestaurantDetailPage />);

    expect(await findByText(/서울 강남구 123456/)).toBeInTheDocument();
  });

  it('레스토랑 메뉴 리스트가 보인다.', async () => {
    const { findByRole } = render(<RestaurantDetailPage />);

    expect(await findByRole('list')).toHaveTextContent('비빔밥');
  });
});
