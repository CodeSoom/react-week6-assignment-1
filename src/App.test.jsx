import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
      categories: [
        { id: 1, name: '한식' },
      ],
      restaurants: [
        { id: 1, name: '양천주가' },
      ],
    }));
  });

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  context('with home path', () => {
    it('renders home page', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Home');
    });
  });

  context('with about path', () => {
    it('renders about page', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent(/About 페이지입니다/);
    });
  });

  context('with path restaurnats', () => {
    it('renders the restaurants page', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent('서울');
      expect(container).toHaveTextContent('한식');
    });
  });

  context('with path restaurnat', () => {
    it('renders the restaurant page', () => {
      const { container } = renderApp({ path: '/restaurants/:id' });

      expect(container).toHaveTextContent('양천주가');
      expect(container).toHaveTextContent(/서울 강남구/);
      expect(container).toHaveTextContent('메뉴');
      expect(container).toHaveTextContent('비빔밥');
    });
  });

  context('with invalid path', () => {
    it('renders not found page', () => {
      const { container } = renderApp({ path: '/sdf' });

      expect(container).toHaveTextContent('잘못된 페이지입니다');
    });
  });
});
