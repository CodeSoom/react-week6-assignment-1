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

  context('with path /', () => {
    it('renders the home page', () => {
      const { queryByText } = render((
        <MemoryRouter>
          <App />
        </MemoryRouter>
      ));

      expect(queryByText(/About/)).not.toBeNull();
      expect(queryByText(/Restaurants/)).not.toBeNull();
    });
  });

  context('with path /about', () => {
    it('renders the about page', () => {
      const { queryByText } = render((
        <MemoryRouter initialEntries={['/about']}>
          <App />
        </MemoryRouter>
      ));

      expect(queryByText(/About.../)).not.toBeNull();
    });
  });
});
