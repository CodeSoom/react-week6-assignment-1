import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

function renderApp({ path }) {
  return render((
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  ));
}

describe('App', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
      categories: [],
      restaurant: {
        id: 1,
        name: '양천주가',
        menuItems: [
          { id: 1, name: '탕수육' },
        ],
      },
      restaurants: [],
    }));
  });

  it('renders header', () => {
    const { container } = renderApp({ path: '' });

    expect(container).toHaveTextContent('헤더');
  });

  context('with path /', () => {
    it('renders HomePage', () => {
      const { container } = renderApp('/');

      expect(container).toHaveTextContent('Home');
    });

    context('with path /about', () => {
      it('renders AboutPage', () => {
        const { container } = renderApp({ path: '/about' });

        expect(container).toHaveTextContent('About 페이지 입니다.');
      });
    });

    context('with path /restaurants', () => {
      it('renders RestaurantsPage', () => {
        const { container } = renderApp({ path: '/restaurants' });

        expect(container).toHaveTextContent('서울');
      });
    });

    context('with undefined path', () => {
      it('renders NotFoundPage', () => {
        const { container } = renderApp({ path: '/xxx' });

        expect(container).toHaveTextContent('404 Not Found');
      });
    });

    context('with path /restaurants/1', () => {
      it('renders RestaurantDetailPage', () => {
        const { container } = renderApp({ path: '/restaurants/1' });

        expect(container).toHaveTextContent('양천주가');
      });
    });
  });
});
