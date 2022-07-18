import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import REGIONS from '../fixtures/regions';
import CATEGORIES from '../fixtures/categories';
import RESTAURANTS from '../fixtures/restaurants';

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const SEOUL = REGIONS[0];
  const KOREAN_FOOD = CATEGORIES[0];
  const KIMBAPHEAVEN = RESTAURANTS;

  useSelector.mockImplementation((selector) => selector({
    categories: CATEGORIES,
    regions: REGIONS,
    restaurants: RESTAURANTS,
  }));

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  it('헤더가 렌더링된다', () => {
    const { container } = renderApp({ path: '/' });

    expect(container).toHaveTextContent('헤더');
  });

  context('path가 / 일때', () => {
    it('Homepage가 렌더링된다', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Home');
      expect(container).toHaveTextContent('About');
      expect(container).toHaveTextContent('Restaurants');
    });
  });

  context('path가 /about 일때', () => {
    it('AboutPage가 렌더링된다', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('About');
      expect(container).toHaveTextContent('About 페이지입니다.');
    });
  });

  context('path가 /restaurants 일때', () => {
    it('지역버튼이 렌더링된다', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent(SEOUL.name);
    });

    it('음식종류 버튼이 렌더링된다', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent(KOREAN_FOOD.name);
    });

    it('레스토랑들이 렌더링된다', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent(KIMBAPHEAVEN[0].name);
    });
  });

  context('없는 페이지일때', () => {
    it('페이지가없어요! 가 렌더링된다', () => {
      const { container } = renderApp({ path: '/x' });

      expect(container).toHaveTextContent('페이지가없어요!');
    });
  });
});
