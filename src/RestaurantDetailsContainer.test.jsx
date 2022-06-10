import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantDetailsContainer from './RestaurantDetailsContainer';

import RESTAURANT_DETAILS from '../fixtures/restaurantDetails';

describe('RestaurantDetailsContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurantDetails: RESTAURANT_DETAILS,
    }));
  });

  it('레스토랑 이름인 페이지 제목이 보인다.', async () => {
    const { findByRole } = render(<RestaurantDetailsContainer />);

    expect(await findByRole('heading', { level: 2 })).toHaveTextContent(RESTAURANT_DETAILS.name);
  });

  it('레스토랑 주소가 보인다.', async () => {
    const { findByText } = render(<RestaurantDetailsContainer />);

    expect(await findByText(`주소: ${RESTAURANT_DETAILS.address}`)).toBeInTheDocument();
  });

  it('레스토랑 메뉴 리스트가 보인다.', async () => {
    const { findByRole } = render(<RestaurantDetailsContainer />);

    expect(await findByRole('list')).toEqual(RESTAURANT_DETAILS.menuItems);
  });
});
