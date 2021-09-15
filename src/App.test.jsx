import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { dispatch } from '../__mocks__/react-redux';

import REGIONS from '../fixtures/regions';
import CATEGOREIS from '../fixtures/categories';
import RESTAURANTS from '../fixtures/restaurants';

import App from './App';

describe('App', () => {
  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: REGIONS,
      categories: CATEGOREIS,
      restaurants: RESTAURANTS,
    }));
  });

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  context('"/" path 에서는', () => {
    const path = '/';

    it('HOME이 보여야 한다.', () => {
      const { container } = renderApp({ path });

      expect(container).toHaveTextContent('HOME');
      expect(container).toHaveTextContent('About');
      expect(container).toHaveTextContent('Restaurants');
    });

    it('헤더가 보여야 한다.', () => {
      const { container } = renderApp({ path });

      expect(container).toHaveTextContent('헤더');
    });
  });

  context('"/about" path 에서는', () => {
    const path = '/about';

    it('Abount이 보여야 한다.', () => {
      const { container } = renderApp({ path });

      expect(container).toHaveTextContent('About');
      expect(container).toHaveTextContent('About 페이지 입니다.');
    });

    it('헤더가 보여야 한다.', () => {
      const { container } = renderApp({ path });

      expect(container).toHaveTextContent('헤더');
    });
  });

  context('"/restaurants" path 에서는', () => {
    const path = '/restaurants';

    it('Restaurants가 보여야 한다.', () => {
      const { container } = renderApp({ path });

      expect(container).toHaveTextContent('Restaurants');
    });

    it('지역들이 보여야 한다.', () => {
      const { container } = renderApp({ path });

      expect(container).toHaveTextContent('서울');
    });

    it('헤더가 보여야 한다.', () => {
      const { container } = renderApp({ path });

      expect(container).toHaveTextContent('헤더');
    });
  });

  test('"/restaurant"', () => {
    const path = '/restaurant/1';

    const { container } = renderApp({ path });

    expect(container).toHaveTextContent('restaurantId:1');
    expect(container).toHaveTextContent('양천주가');
    expect(container).toHaveTextContent('서울 강남구 123456');
    expect(container).toHaveTextContent('메뉴');
    expect(container).toHaveTextContent('비빔밥');
  });

  context('잘못된 path 에서는', () => {
    const path = '/xxx';

    it('Not found가 보여야 한다.', () => {
      const { container } = renderApp({ path });

      expect(container).toHaveTextContent('Not found');
    });

    it('헤더가 보여야 한다.', () => {
      const { container } = renderApp({ path });

      expect(container).toHaveTextContent('헤더');
    });
  });
});
