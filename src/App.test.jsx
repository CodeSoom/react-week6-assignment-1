import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      categories: [
        { id: 1, name: '한식' },
        { id: 2, name: '중식' },
        { id: 3, name: '일식' },
        { id: 4, name: '양식' },
        { id: 5, name: '분식' },
      ],
      regions: ['서울', '대전', '대구', '부산', '광주', '강원도', '인천'],
      selectedRestaurants: ['원초밥'],

      selected: {
        category: { id: null },
      },
    },
  }));

  it('fetches categories and regions', () => {
    render(<App />);

    expect(dispatch).toBeCalledTimes(2);
  });
});
