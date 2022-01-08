// ts-check
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { useSelector, useDispatch } from 'react-redux';

import App from './App';
import restaurant from '../fixtures/restaurant';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useMatch: () => ({
    params: {
      id: 1,
    },
  }),
}));

describe('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  context('존재하지 않는 URL로 접근시', () => {
    it('404페이지를 노출한다', () => {
      const { getByText } = render((
        <MemoryRouter initialEntries={['/404']}>
          <App />
        </MemoryRouter>
      ));
      expect(getByText(/404 Not Found/)).not.toBeNull();
    });
  });

  context('/about로 접근시', () => {
    it('About페이지를 노출한다', () => {
      const { getByText } = render((
        <MemoryRouter initialEntries={['/about']}>
          <App />
        </MemoryRouter>
      ));
      expect(getByText(/About 페이지입니다/)).not.toBeNull();
    });
  });

  context('/restaurants로 접근시', () => {
    it('Restaurants페이지를 노출한다', () => {
      useSelector.mockImplementation((selector) => selector({
        regions: [],
        categories: [],
        restaurants: [],
      }));
      const { getByText } = render((
        <MemoryRouter initialEntries={['/restaurants']}>
          <App />
        </MemoryRouter>
      ));
      expect(getByText(/Restaurants/)).not.toBeNull();
    });
  });

  context('/restaurants/1로 접근시', () => {
    it('Restaurant페이지를 노출한다', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurant,
      }));
      const { getByText } = render((
        <MemoryRouter initialEntries={['/restaurants/1']}>
          <App />
        </MemoryRouter>
      ));
      expect(getByText(/메뉴/)).not.toBeNull();
    });
  });

  context('헤더 버튼을 누르면', () => {
    it('/"로 이동한다.', () => {
      const history = createMemoryHistory();
      const { getByText, getByRole } = render((
        <MemoryRouter history={history} initialEntries={['/about']}>
          <App />
        </MemoryRouter>
      ));

      fireEvent.click(getByRole('link', { name: /헤더/ }));

      expect(history.location.pathname).toBe('/');
      expect(getByText(/Home/)).toBeInTheDocument();
    });
  });
});
