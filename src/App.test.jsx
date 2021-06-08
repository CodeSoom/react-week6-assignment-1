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
      categories: [],
      regions: [],
      selectedRestaurants: [],

      selected: {
        category: { id: null },
      },
    },
  }));

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
});
