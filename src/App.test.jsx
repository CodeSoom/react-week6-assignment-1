import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';

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
    restaurant: {
      id: 1,
      name: '마법사주방',
      address: '서울시 강남구 삼성동',
      menuItems: [
        { id: 1, name: '돈까스', price: 10000 },
      ],
    },
  }));

  const renderApp = ({ path }) => render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );

  it('renders App', () => {
    renderApp({ path: '/' });
  });

  context('with path /restaurants', () => {
    it('renders the home page', () => {
      const { getByText } = renderApp({ path: '/restaurants' });
      expect(getByText('레스토랑 리스트')).toBeInTheDocument();
    });
  });

  context('with path /about', () => {
    it('renders the about page', () => {
      const { getByText } = renderApp({ path: '/about' });
      expect(getByText('About')).toBeInTheDocument();
    });
  });

  context('with path /restaurants/1', () => {
    it('renders the restaurant page', () => {
      const { getByText } = renderApp({ path: '/restaurants/1' });
      expect(getByText('상세정보')).toBeInTheDocument();
    });
  });
});
