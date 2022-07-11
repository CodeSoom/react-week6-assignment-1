import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

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

  const { container } = render((
    <MemoryRouter>
      <App />
    </MemoryRouter>
  ));

  expect(dispatch).toBeCalled();

  it('app을 렌더링한다', () => {
    expect(container).toHaveTextContent('서울');
    expect(container).toHaveTextContent('한식');
    expect(container).toHaveTextContent('헤더');
  });
});
