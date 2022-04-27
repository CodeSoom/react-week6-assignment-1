import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions: [],
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
});
