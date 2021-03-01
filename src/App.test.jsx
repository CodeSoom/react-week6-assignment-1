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

  it('HomePage를 그린다.', () => {
    const { queryByText } = renderAppWithPath({ path: '/' });

    expect(queryByText('헤더').getAttribute('href')).toBe('/');
    expect(queryByText('헤더')).toBeInTheDocument();
    expect(queryByText('Home')).toBeInTheDocument();
  });

  it('AboutPage를 그린다.', () => {
    const { queryByText } = renderAppWithPath({ path: '/About' });

    expect(queryByText('헤더')).toBeInTheDocument();
    expect(queryByText('About 페이지 입니다.')).toBeInTheDocument();
  });

  it('RestaurantsPage를 그린다.', () => {
    const { queryByText } = renderAppWithPath({ path: '/Restaurants' });

    expect(queryByText('헤더')).toBeInTheDocument();
    expect(queryByText('서울')).toBeInTheDocument();
  });
});
