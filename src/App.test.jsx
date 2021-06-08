import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  describe('render', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        regions: [
          { id: 1, name: '서울' },
        ],
        categories: [],
        restaurants: [
          { id: 1, name: '양천주가', address: '서울 강남구', menuItems: [
              { id: 1, restaurantId: 1, name: '비빔밥' },
            ],
          }
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

    context('with Home page', () => {
      it('verifies header', () => {
        const { getByText } = render((
          <MemoryRouter>
            <App />
          </MemoryRouter>
        ));

        expect(getByText('헤더')).not.toBeNull();

        // Link Test
        expect(getByText('헤더').closest('a')).toContainHTML('a');
        expect(getByText('헤더').closest('a')).toHaveAttribute('href', '/');
      });

      it('verifies contents', () => {
        const { container } = renderApp({ path: '/' });
        expect(container).toHaveTextContent('Home');
      });
    });

    context('with About page', () => {
      it('verifies contents', () => {
        const { container } = renderApp({ path: '/about' });
        expect(container).toHaveTextContent('About');
      });
    });

    context('with Restaurants page', () => {
      context('with url parameters', () => {
        it('verifies contents', () => {
          const { container } = renderApp({ path: '/restaurants/1' });
          expect(container).toHaveTextContent('양천주가');
          expect(container).toHaveTextContent('서울 강남구');
          expect(container).toHaveTextContent('비빔밥');
        });
      });
      context('without url parameters', () => {
        it('verifies contents', () => {
          const { container } = renderApp({ path: '/restaurants' });
          expect(container).toHaveTextContent('서울');
        });
      });
    });

    context('with NotFound page', () => {
      it('verifies contents', () => {
        const { container } = renderApp({ path: '/xxx' });
        expect(container).toHaveTextContent('404 Not Found');
      });
    });
  });
});
