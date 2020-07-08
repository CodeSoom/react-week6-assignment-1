import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [{
        id: 101, name: '서울',
      }],
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

  context('with path /', () => {
    it('renders HomePage', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path /about', () => {
    it('renders AboutPage', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('About 페이지 입니다');
    });
  });

  context('with path /restaurants', () => {
    it('renders RestaurantsPage', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent('서울');
    });
  });

  context('with invalid path /xxx', () => {
    it('renders NotFoudPage', () => {
      const { container } = renderApp({ path: '/xxx' });

      expect(container).toHaveTextContent('Not Found');
    });
  });

  context('when click header from other page', () => {
    it('goes to HomePage', () => {
      const { container, getByText } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('헤더');

      fireEvent.click(getByText('헤더'));

      expect(container).toHaveTextContent('Home');
    });
  });
});
