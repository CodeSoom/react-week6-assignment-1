import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import restaurants from '../fixtures/restaurants';
import categories from '../fixtures/categories';
import regions from '../fixtures/regions';

describe('App', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions,
      categories,
      restaurants,
    }));
  });

  const renderApp = ({ path }) => render((
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  ));

  context('올바른 경로일 경우', () => {
    it('"/"일 때, HomePage가 랜더링된다', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('HomePage');
    });

    it('"/about"일 때, AboutPage가 랜더링된다', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('About 페이지입니다.');
    });

    it('"/restaurants"일 때, RestaurantsPage가 랜더링된다', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent('김밥제국');
    });
  });

  context('잘못된 경로일 경우', () => {
    it('NotFoundPage가 랜더링된다', () => {
      const { container } = renderApp({ path: '/xxx' });

      expect(container).toHaveTextContent('404 Not Found Page');
    });
  });
});
