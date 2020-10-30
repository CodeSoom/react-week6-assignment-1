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

  const renderAppWith = ({ path }) => render((
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  ));

  it('shows home-page with path /', () => {
    const { container } = renderAppWith({ path: '/' });

    expect(container).toHaveTextContent('Home');
  });

  it('shows about-page with path /about', () => {
    const { container } = renderAppWith({ path: '/about' });

    expect(container).toHaveTextContent('About');
  });

  it('shows restaurants-page with path /restaurants', () => {
    const { container } = renderAppWith({ path: '/restaurants' });

    expect(container).toHaveTextContent('서울');
  });

  it('shows restaurant-detail-page with path /restaurants/{id}', () => {
    const { container } = renderAppWith({ path: '/restaurants/555' });

    expect(container).toHaveTextContent('restaurant 555 detail');
  });

  it('shows not-found-page with not existing path', () => {
    const { container } = renderAppWith({ path: '/404' });

    expect(container).toHaveTextContent('존재하지 않는 페이지 입니다');
  });
});
