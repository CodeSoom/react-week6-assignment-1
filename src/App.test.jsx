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

    context('with path /xxx', () => {
      it('renders NotFoundPage', () => {
        const { container } = renderApp({ path: '/xxx' });

        expect(container).toHaveTextContent('404 Not Found');
      });
    });

    context('with path /restaurant/1', () => {
      it('renders NotFoundPage', () => {
        const { container } = renderApp({ path: '/restaurant/1' });

        expect(container).toHaveTextContent('양천주가');
      });
    });
  });
});
