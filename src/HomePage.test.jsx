import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

function renderApp({ path }) {
  return render((
    <MemoryRouter initialEntries={[path]}>
      <HomePage />
    </MemoryRouter>
  ));
}
describe('HomePage', () => {
  context('Show homepage with /', () => {
    it('renders the homepage', () => {
      const { queryByText } = renderApp({ path: '/' });

      expect(queryByText('Home')).not.toBeNull();
      expect(queryByText('Restaurants')).not.toBeNull();
      expect(queryByText('About')).not.toBeNull();
    });

    it('Links exist', () => {
      renderApp({ path: '/' });

      const aTags = document.querySelectorAll('a');
      expect(aTags[0].getAttribute('href')).toEqual('/about');
      expect(aTags[1].getAttribute('href')).toEqual('/restaurants');
    });
  });
});
