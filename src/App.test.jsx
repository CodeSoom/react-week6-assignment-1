import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions: [{ id: 1, name: '서울' }],
      categories: [{ id: 1, name: '한식' }],
      restaurants: [{ id: 1, name: '마법사주방' }],
    }));
  });

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  context('path가 /인 경우', () => {
    it('HomePage를 표시한다.', () => {
      const { queryByText } = renderApp({ path: '/' });

      expect(queryByText(/헤더/)).not.toBeNull();
      expect(queryByText(/Home/)).not.toBeNull();

      expect(queryByText(/헤더/).getAttribute('href')).toBe('/');
    });
  });

  context('path가 /about 인 경우', () => {
    it('AboutPage를 표시한다.', () => {
      const { queryByText } = renderApp({ path: '/about' });

      expect(queryByText(/헤더/)).not.toBeNull();
      expect(queryByText(/이 서비스에 대해서/)).not.toBeNull();
    });
  });

  context('path가 /restaurants 인 경우', () => {
    it('RestaurantsPage를 표시한다', () => {
      const { queryByText } = renderApp({ path: '/restaurants' });

      expect(queryByText(/헤더/)).not.toBeNull();
      expect(queryByText(/서울/)).not.toBeNull();
      expect(queryByText(/한식/)).not.toBeNull();
      expect(queryByText(/마법사주방/)).not.toBeNull();
    });
  });

  context('with invalid path', () => {
    it('renders not found page', () => {
      const { queryByText } = renderApp({ path: '/xxx' });

      expect(queryByText(/404/)).not.toBeNull();
    });
  });
});
