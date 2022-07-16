import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import REGIONS from '../fixtures/regions';
import CATEGORIES from '../fixtures/categories';
import RESTAURANTS from '../fixtures/restaurants';
import RESTAURANT from '../fixtures/restaurant';

import App from './App';

jest.mock('react-redux');

describe('<App />', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    dispatch.mockClear();
  });

  const renderApp = ({ path }) => render((
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  ));

  it('renders header', () => {
    const { getByText } = renderApp({ path: '/' });

    expect(getByText('헤더')).toBeInTheDocument();
  });

  context('with path /', () => {
    it('renders home page', () => {
      const { getByText } = renderApp({ path: '/' });

      expect(getByText('Home')).toBeInTheDocument();
      expect(getByText('About')).toBeInTheDocument();
      expect(getByText('Restaurants')).toBeInTheDocument();
    });
  });

  context('with path /about', () => {
    it('renders about page', () => {
      const { getByText } = renderApp({ path: '/about' });

      expect(getByText('About')).toBeInTheDocument();
      expect(getByText('About 페이지 입니다')).toBeInTheDocument();
    });
  });

  context('with path /restaurants', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        regions: REGIONS,
        categories: CATEGORIES,
        restaurants: RESTAURANTS,
      }));
    });

    it('renders restaurants page', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent(REGIONS[0].name);
      expect(container).toHaveTextContent(CATEGORIES[0].name);
      expect(container).toHaveTextContent(RESTAURANTS[0].name);
    });
  });

  context('with path /restaurants/:restaurantId', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: RESTAURANT,
      }));
    });

    it('renders restaurants detail page', () => {
      const { container } = renderApp({ path: '/restaurants/1' });

      expect(container).toHaveTextContent('김밥제국');
      expect(container).toHaveTextContent('서울시 강남구 역삼동');
      expect(container).toHaveTextContent('메뉴');
    });
  });

  context('with wrong path', () => {
    it('renders not found page', () => {
      const { container } = renderApp({ path: '/some/bad/route' });

      expect(container).toHaveTextContent('404 Not Found');
    });
  });
});
