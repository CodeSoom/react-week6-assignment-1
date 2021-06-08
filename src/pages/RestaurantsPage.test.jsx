import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import RestaurantsPage from './RestaurantsPage';

jest.mock('react-redux');

describe('RestaurantsPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
  });

  beforeAll(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        categories: [
          { id: 1, name: '한식' },
          { id: 2, name: '중식' },
        ],
        regions: [
          { id: 1, name: '서울' },
          { id: 2, name: '부산' },
        ],
        selectedRestaurants: [{ id: 1, name: '양천주가' }],

        selected: {
          category: { id: null },
        },
      },
    }));
  });

  it('renders title', () => {
    const { container } = render(<RestaurantsPage />);

    expect(container).toHaveTextContent('Restaurants');
  });

  it('renders categories', () => {
    const { getByRole } = render(<RestaurantsPage />);

    ['한식', '중식'].forEach((category) => {
      expect(getByRole('button', { name: category })).toBeInTheDocument();
    });
  });

  it('renders regions', () => {
    const { getByRole } = render(<RestaurantsPage />);

    ['서울', '부산'].forEach((region) => {
      expect(getByRole('button', { name: region })).toBeInTheDocument();
    });
  });

  it('renders selectedRestaurants', () => {
    const { container } = render(<RestaurantsPage />);

    expect(container).toHaveTextContent('양천주가');
  });
});
