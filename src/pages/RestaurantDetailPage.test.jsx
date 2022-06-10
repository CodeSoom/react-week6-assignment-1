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
    render(<RestaurantDetailPage />);

    expect(dispatch).toBeCalled();
  });

  it('레스토랑 이름인 페이지 제목이 보인다.', async () => {
    const { findByRole } = render(<RestaurantDetailPage />);

    expect(await findByRole('heading', { level: 2 })).toHaveTextContent('마법사주방');
  });
});
