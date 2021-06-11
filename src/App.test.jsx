import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  describe('render', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    function renderApp({ path }) {
      return render((
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>
      ));
    }

    context('when path is /', () => {
      it('renders header', () => {
        const { getByText, queryByText } = renderApp({ path: '/' });

        expect(queryByText('헤더')).not.toBeNull();
        expect(getByText('헤더').closest('a')).toContainHTML('a');
        expect(getByText('헤더').closest('a')).toHaveAttribute('href', '/');
      });

      it('renders contents', () => {
        const { container } = renderApp({ path: '/' });
        expect(container).toHaveTextContent('Home');
      });
    });

    context('when path is /about', () => {
      it('renders contents', () => {
        const { container } = renderApp({ path: '/about' });
        expect(container).toHaveTextContent('About');
      });
    });

    context('when path is /restaurants', () => {
      beforeEach(() => {
        useSelector.mockImplementation((selector) => selector({
          regions: [
            { id: 1, name: '서울' },
          ],
          categories: [],
          restaurants: [],
          restaurant: {
            id: 1,
            categoryId: 1,
            name: '양천주가',
            address: '서울 강남구',
            menuItems: [
              { id: 1, restaurantId: 1, name: '비빔밥' },
            ],
          },
        }));
      });

      context('with url parameters', () => {
        it('renders contents', () => {
          const { container } = renderApp({ path: '/restaurants/1' });
          expect(container).toHaveTextContent('양천주가');
          expect(container).toHaveTextContent('서울 강남구');
          expect(container).toHaveTextContent('비빔밥');
        });
      });
      context('without url parameters', () => {
        it('renders contents', () => {
          const { container } = renderApp({ path: '/restaurants' });
          expect(container).toHaveTextContent('서울');
        });
      });
    });

    context('when path is /xxx', () => {
      it('renders contents', () => {
        const { container } = renderApp({ path: '/xxx' });
        expect(container).toHaveTextContent('404 Not Found');
      });
    });
  });
});
