import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [{ id: 1, name: '서울' }],
      categories: [],
      restaurants: [],
    }));
  });

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  it('renders Header', () => {
    const { container } = render((
      <MemoryRouter>
        <App />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('헤더');
  });

  context('with path /', () => {
    it('renders HomePage', () => {
      const path = '/';

      const { container } = renderApp({ path });

      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path /restaurants', () => {
    it('renders RestaurantsPage', () => {
      const path = '/restaurants';

      const { container } = renderApp({ path });

      expect(container).toHaveTextContent('서울');
    });
  });

  context('with path /about', () => {
    it('renders AboutPage', () => {
      const path = '/about';

      const { container } = renderApp({ path });

      expect(container).toHaveTextContent('이 페이지는 소개 페이지 입니다.');
    });
  });

  context('with invalid path ', () => {
    it('renders NotFoundPage', () => {
      const path = '/www';

      const { container } = renderApp({ path });

      expect(container).toHaveTextContent('Not Found');
    });
  });
});
