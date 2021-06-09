import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import RestaurantPage from './RestaurantPage';

jest.mock('react-redux');

describe('RestaurantPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
  });

  beforeAll(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector(
      {
        restaurant: {
          selected: {
            restaurant: {
              name: '양천주가',
              address: '서울 강남구',
              menuItems: ['비빔밥'],
            },
          },
        },
      },
    ));
  });

  it('loads informations of selected restaurant', () => {
    render(<RestaurantPage restaurantID={1} />);

    expect(dispatch).toBeCalled();
  });

  it('renders restaurant name, address, menus', () => {
    const { container } = render(<RestaurantPage restaurantID={1} />);

    expect(container).toHaveTextContent('양천주가');
    expect(container).toHaveTextContent('서울 강남구');
    expect(container).toHaveTextContent('비빔밥');
  });
});
