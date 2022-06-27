import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RestaurantsPage from './pages/RestaurantsPage';
import NotFoundPage from './pages/NotFoundPage';

jest.mock('react-redux');

const appRender = (path) => render((
  <MemoryRouter initialEntries={[path]}>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </MemoryRouter>
));

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    regions: [],
    categories: [],
    restaurants: [],
  }));

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  it('페이지 제목이 보인다.', () => {
    const { getByRole } = appRender();

    expect(getByRole('heading', { level: 1 })).toHaveTextContent('헤더');
  });

  it('/ 경로에서는 HomePage가 보인다.', () => {
    const { getByRole } = appRender('/');

    expect(getByRole('heading', { level: 2 })).toHaveTextContent('Home');
  });

  it('/about 경로에서는 AboutPage가 보인다.', () => {
    const { getByRole } = appRender('/about');

    expect(getByRole('heading', { level: 2 })).toHaveTextContent('About');
  });

  it('/restaurants 경로에서는 RestaurantsPage가 보인다.', () => {
    const { getByRole } = appRender('/restaurants');

    expect(getByRole('heading', { level: 2 })).toHaveTextContent('Restaurants');
  });

  it('페이지가 없는 경로에서는 NotFoundPage가 보인다.', () => {
    const { getByRole } = appRender('/ssss');

    expect(getByRole('heading', { level: 2 })).toHaveTextContent('Not Found');
  });
});
