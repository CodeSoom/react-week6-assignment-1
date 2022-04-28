import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories: [],
      restaurants: [],
      restaurantDetail: {
        id: 1,
        categoryId: 1,
        name: '양천주가',
        address: '서울 강남구',
        menuItems: [
          {
            id: 1,
            retaurantId: 1,
            name: '탕수육',
          },
        ],
      },
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

      expect(container).toHaveTextContent('About');
    });
  });

  context('with path /restaurants', () => {
    it('renders RestaurantsPage', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent('Restaurants');
    });
  });

  context('with path /restaurants/1', () => {
    it('renders RestaurantDetailPage', () => {
      const { container } = renderApp({ path: '/restaurants/1' });

      expect(container).toHaveTextContent('주소');
      expect(container).toHaveTextContent('메뉴');
    });
  });

  context('with undefined paths', () => {
    it('renders error message', () => {
      const { container } = renderApp({ path: '/otherPage' });

      expect(container).toHaveTextContent('404 Not Found');
    });
  });
});
