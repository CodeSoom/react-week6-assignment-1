import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

function renderAppWithPath({ path }) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

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
  });

  it('Header는 올바른 pathName에 연결되어 있다.', () => {
    const { queryByText } = renderAppWithPath({ path: '/' });

    expect(queryByText('Header').getAttribute('href')).toBe('/');
  });

  it('HomePage를 그린다.', () => {
    const { queryByText } = renderAppWithPath({ paht: '/' });

    expect(queryByText('Header')).toBeInTheDocument();
    expect(queryByText('Home')).toBeInTheDocument();
  });

  it('AboutPage를 그린다.', () => {
    const { queryByText } = renderAppWithPath({ path: '/About' });

    expect(queryByText('Header')).toBeInTheDocument();
    expect(queryByText('About 페이지 입니다.')).toBeInTheDocument();
  });

  it('RestaurantsPage를 그린다.', () => {
    const { queryByText } = renderAppWithPath({ path: '/Restaurants' });

    expect(queryByText('Header')).toBeInTheDocument();
    expect(queryByText('서울')).toBeInTheDocument();
  });
});
