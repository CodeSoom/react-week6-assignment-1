import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

function renderApp({ pathname }) {
  return render(
    <MemoryRouter initialEntries={[pathname]}>
      <App />
    </MemoryRouter>,
  );
}

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
    ],
    categories: [
      { id: 1, name: '한식' },
    ],
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  context('path가 /인 경우, ', () => {
    it('HomePage를 표시합니다.', () => {
      const { queryByText } = renderApp({ pathname: '/' });

      expect(queryByText(/헤더/)).not.toBeNull();
      expect(queryByText(/Home/)).not.toBeNull();

      expect(queryByText(/헤더/).getAttribute('href')).toBe('/');
    });
  });

  context('path가 /about 인 경우, ', () => {
    it('AboutPage를 표시합니다.', () => {
      const { queryByText } = renderApp({ pathname: '/about' });

      expect(queryByText(/헤더/)).not.toBeNull();
      expect(queryByText(/About page/)).not.toBeNull();
    });
  });

  context('path가 /restaurants 인 경우, ', () => {
    it('RestaurantsPage를 표시합니다.', () => {
      const { queryByText } = renderApp({ pathname: '/restaurants' });

      expect(queryByText(/헤더/)).not.toBeNull();
      expect(queryByText(/서울/)).not.toBeNull();
      expect(queryByText(/한식/)).not.toBeNull();
      expect(queryByText(/마법사주방/)).not.toBeNull();
    });
  });

  context('path가 /restaurants/1 인 경우, ', () => {
    it('RestaurantsDetailsContainer를 표시합니다.', () => {
      const { queryByText } = renderApp({ pathname: '/restaurants/1' });

      expect(queryByText(/양천주가/)).not.toBeNull();
      expect(queryByText(/서울 강남구/)).not.toBeNull();
      expect(queryByText(/탕수육/)).not.toBeNull();
      expect(queryByText(/짜장면/)).not.toBeNull();
    });
  });
});
