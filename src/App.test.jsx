import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
    ],
    categories: [
      { id: 1, name: '한식' },
    ],
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  it('shows Home page with path /', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('Home');
  });

  it('shows not found page with not existing path', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('존재하지 않는 페이지 입니다');
  });
});
