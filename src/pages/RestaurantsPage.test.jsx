import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import RestaurantsPage from './RestaurantsPage';

jest.mock('react-redux');
jest.mock('../services/api');

describe('RestaurantsPage', () => {
  it('renders categories', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [{ id: 1, name: '서울' }],
      categories: [{ id: 1, name: '한식' }],
      restaurants: [{ id: 1, name: '마녀주방' }],
    }));
    const { getByText } = render(<RestaurantsPage />);

    expect(getByText('서울')).not.toBeNull();
    expect(getByText('한식')).not.toBeNull();
    expect(getByText('마녀주방')).not.toBeNull();
    expect(dispatch).toBeCalledTimes(1);
  });
});
