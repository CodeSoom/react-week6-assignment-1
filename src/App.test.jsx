import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

const appRender = (path) => render((
  <MemoryRouter initialEntries={[path]}>
    <App />
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

    expect(getByRole('heading')).toHaveTextContent('Home');
  });

  it('/ 경로에서는 HomePage가 보인다.', () => {
    const { getByRole } = appRender('/');

    expect(getByRole('heading')).toHaveTextContent('Home');
  });

  it('/about 경로에서는 AboutPage가 보인다.', () => {
    const { getByRole } = appRender('/about');

    expect(getByRole('heading')).toHaveTextContent('About');
  });

  it('/restaurants 경로에서는 RestaurantsPage가 보인다.', () => {
    const { getByRole } = appRender('/restaurants');

    expect(getByRole('heading')).toHaveTextContent('Restaurants');
  });

  it('페이지가 없는 경로에서는 NotFoundPage가 보인다.', () => {
    const { getByRole } = appRender('/ssss');

    expect(getByRole('heading')).toHaveTextContent('Not Found');
  });
});
