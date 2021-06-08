import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      categories: [{ id: 1, name: '한식' }],
      regions: [],
      selectedRestaurants: [],

      selected: {
        category: { id: null },
      },
    },
  }));

  it('renders 헤더', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );

    expect(container).toHaveTextContent('헤더');
  });

  context('when path is invaild', () => {
    it('renders Not Found page', () => {
      const { container } = render(
        <MemoryRouter initialEntries={['/any_not_exist_url']}>
          <App />
        </MemoryRouter>,
      );

      expect(container).toHaveTextContent('404 Not Found');
    });
  });

  context('when path is /', () => {
    it('renders Home page', () => {
      const { container } = render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>,
      );

      expect(container).toHaveTextContent('Home');
    });
  });

  context('when path is /restaurants', () => {
    it('renders Restaurants page', () => {
      const { container } = render(
        <MemoryRouter initialEntries={['/restaurants']}>
          <App />
        </MemoryRouter>,
      );

      expect(container).toHaveTextContent('Restaurants');
      expect(container).toHaveTextContent('한식');
    });
  });

  context('when path is /about', () => {
    it('renders about page', () => {
      const { container } = render(
        <MemoryRouter initialEntries={['/about']}>
          <App />
        </MemoryRouter>,
      );

      expect(container).toHaveTextContent('About');
    });
  });
});
