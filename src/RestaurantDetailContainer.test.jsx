import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetailContainer from './RestaurantDetailContainer';

import restaurantDetail from '../fixtures/restaurantDetail';

jest.mock('react-redux');

describe('RestaurantDetailContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurantDetail,
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('loads restaurant detail from API', () => {
    render(<RestaurantDetailContainer />);

    expect(dispatch).toBeCalled();
  });

  it('renders restaurant detail', () => {
    const { getByText } = render(<RestaurantDetailContainer />);

    expect(getByText(restaurantDetail.name)).not.toBeNull();
  });
});
