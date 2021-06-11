import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import RestaurantPage from './RestaurantPage';

jest.mock('react-redux');
jest.mock('react-router');

describe('RestaurantPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
  });

  beforeAll(() => {
    useParams.mockImplementation(() => ({ id: 1 }));
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        information: {
          name: '양천주가',
          address: '서울 강남구',
          menuItems: ['비빔밥'],
        },
      },
    }));
  });

  it('loads informations of selected restaurant', () => {
    render(<RestaurantPage />);

    expect(dispatch).toBeCalled();
  });

  it('renders restaurant name, address, menus', () => {
    const { container } = render(<RestaurantPage />);

    expect(container).toHaveTextContent('양천주가');
    expect(container).toHaveTextContent('서울 강남구');
    expect(container).toHaveTextContent('비빔밥');
  });
});
