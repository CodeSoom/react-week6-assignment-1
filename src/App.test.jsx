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
      menu: [
        { id: 1, name: '돈까스', price: 10000 },
      ],
    },
  }));

  const renderComponent = ({ path }) => render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );

  it('renders App', () => {
    renderComponent({ path: '/' });
  });

  context('with path /', () => {
    it('renders the home page', () => {
      const { getByText } = renderComponent({ path: '/' });
      expect(getByText('홈페이지')).toBeInTheDocument();
    });
  });

  context('with path /about', () => {
    it('renders the about page', () => {
      const { getByText } = renderComponent({ path: '/about' });
      expect(getByText('About')).toBeInTheDocument();
    });
  });

  context('with path /restaurants/1', () => {
    it('renders the restaurant page', () => {
      const { getByText } = renderComponent({ path: '/restaurants/1' });
      expect(getByText('상세정보')).toBeInTheDocument();
    });
  });
});
