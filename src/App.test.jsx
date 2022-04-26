import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

beforeEach(() => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
    ],
    categories: [],
    restaurants: [],
    restaurant: {
      id: 200,
      name: '마법사주방',
      address: '서울 강남구',
      menu: [
        { id: 300, name: '탕수육' },
        { id: 301, name: '팔보채' },
      ],
    },
  }));
});

describe('App', () => {
  context('with path /', () => {
    it('renders the home page', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path /about', () => {
    it('renders the about page', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/about']}>
          <App />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('About');
    });
  });

  context('with path /restaurants', () => {
    it('renders the restaurants page', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/restaurants']}>
          <App />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('서울');
    });
  });

  context('with path /restaurants/id', () => {
    it('renders the restaurant page', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/restaurants/200']}>
          <App />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('서울 강남구');
      expect(container).toHaveTextContent('탕수육');
      expect(container).toHaveTextContent('팔보채');
    });
  });
});
