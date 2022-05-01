import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [
        {
          id: 1,
          name: '서울',
        },
      ],
      categories: [],
      restaurants: [],
    }));
  });

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  context('with path /', () => {
    it('renders the home page', () => {
      const { queryByText } = renderApp({ path: '/' });

      expect(queryByText(/About/)).not.toBeNull();
      expect(queryByText(/Restaurants/)).not.toBeNull();
    });
  });

  context('with path /about', () => {
    it('renders the about page', () => {
      const { queryByText } = renderApp({ path: '/about' });

      expect(queryByText(/About.../)).not.toBeNull();
    });
  });

  context('with path /restaurants', () => {
    it('renders the restaurants page', () => {
      const { queryByText } = renderApp({ path: '/restaurants' });

      expect(queryByText(/서울/)).not.toBeNull();
    });
  });

  context('with other path', () => {
    it('renders the not found page', () => {
      const { queryByText } = renderApp({ path: '/xxx' });

      expect(queryByText(/404/)).not.toBeNull();
    });
  });
});
