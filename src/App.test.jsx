import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions: [{ id: 1, name: '서울' }],
      categories: [],
      restaurants: [],
    }));
  });

  it('renders the home page with path /', () => {
    const { container } = renderApp({ path: '/' });

    expect(container).toHaveTextContent('Home');
  });

  it('renders the about page with path /about', () => {
    const { container } = renderApp({ path: '/about' });

    expect(container).toHaveTextContent('About 페이지 입니다.');
  });

  it('renders the restaurants page with path /restaurants', () => {
    const { container } = renderApp({ path: '/restaurants' });

    expect(container).toHaveTextContent('서울');
  });

  it('renders the not found page with invalid path', () => {
    const { container } = renderApp({ path: '/xxx' });

    expect(container).toHaveTextContent('Not Found');
  });
});
