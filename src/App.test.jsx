import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

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

  it('HomePage를 표시합니다.', () => {
    const { queryByText } = render((
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    ));

    expect(queryByText(/헤더/)).not.toBeNull();
    expect(queryByText(/Home/)).not.toBeNull();

    expect(queryByText(/헤더/).getAttribute('href')).toBe('/');
  });

  it('AboutPage를 표시합니다.', () => {
    const { queryByText } = render((
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    ));

    expect(queryByText(/헤더/)).not.toBeNull();
    expect(queryByText(/About page/)).not.toBeNull();
  });
});
