import React from 'react';

import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CATEGORIES from '../fixtures/categories';
import REGIONS from '../fixtures/regions';
import RESTAURANTS from '../fixtures/restaurants';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions: REGIONS,
      categories: CATEGORIES,
      restaurants: RESTAURANTS,
    }));
  });

  context('/에 접속하면', () => {
    it('기본 메인 페이지가 나온다.', () => {
      const { getByText } = renderApp({ path: '/' });

      expect(getByText('Home')).toBeInTheDocument();
      expect(getByText('About')).toBeInTheDocument();
      expect(getByText('Restaurants')).toBeInTheDocument();
    });
  });

  context('/about에 접속하면', () => {
    it('About 페이지로 들어간다.', () => {
      const { getByText } = renderApp({ path: '/about' });

      expect(getByText('About')).toBeInTheDocument();
      expect(getByText('About 페이지 입니다.')).toBeInTheDocument();
    });
  });

  context('/restaurants에 접속하면', () => {
    it('레스토랑 페이지로 들어간다.', () => {
      const { getByText } = renderApp({ path: '/restaurants' });

      REGIONS.forEach(({ name }) => {
        expect(getByText(name)).toBeInTheDocument();
      });

      CATEGORIES.forEach(({ name }) => {
        expect(getByText(name)).toBeInTheDocument();
      });
    });
  });

  context('잘못된 경로에 들어가면', () => {
    it('Not found 페이지가 나온다.', () => {
      const { container } = renderApp({ path: '/some/unknow' });
      expect(container).toHaveTextContent('404 Not Found');
    });
  });
});
