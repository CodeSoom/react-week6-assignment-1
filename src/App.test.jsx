import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions: [{ id: 1, name: '서울' }],
      categories: [],
      restaurants: [],
    }));
  });

  context('with path /', () => {
    it('render the home page', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path /about', () => {
    it('render the about page', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('About 페이지');
    });
  });

  context('with path /restaurants', () => {
    it('render the restaurants page', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent('서울');
    });
  });

  context('with path /restaurants/:id', () => {
    it('render the restaurant details page', () => {
      const { container } = renderApp({ path: '/restaurants/1' });

      expect(container).toHaveTextContent('Loading');
    });
  });

  context('with invalid path', () => {
    it('render the not found page', () => {
      const { container } = renderApp({ path: '/xxx' });

      expect(container).toHaveTextContent('404 Not Found');
    });
  });
});
