import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  beforeAll(() => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        categories: [{ id: 1, name: '한식' }],
        regions: [],
        selectedRestaurants: [],

        selected: {
          category: { id: null },
          region: { id: null },
        },
      },
    }));
  });

  function renderApp(path) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>,
    );
  }

  it.each([
    '/',
    '/about',
    '/restaurants',
  ])('renders 헤더 in %s', (path) => {
    const { container } = renderApp(path);

    expect(container).toHaveTextContent('헤더');
  });

  context('when path is invaild', () => {
    it('renders Not Found page', () => {
      const { container } = renderApp('/any_not_exist_url');

      expect(container).toHaveTextContent('404 Not Found');
    });
  });

  context('when path is /', () => {
    it('renders Home page', () => {
      const { container } = renderApp('/');

      expect(container).toHaveTextContent('Home');
    });
  });

  context('when path is /restaurants', () => {
    it('renders Restaurants page', () => {
      const { container } = renderApp('/restaurants');

      expect(container).toHaveTextContent('Restaurants');
      expect(container).toHaveTextContent('한식');
    });
  });

  context('when path is /about', () => {
    it('renders about page', () => {
      const { container } = renderApp('/about');

      expect(container).toHaveTextContent('About');
    });
  });
});
