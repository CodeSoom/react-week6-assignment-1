import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App with router', () => {
  context('with URL included /HomePage', () => {
    it('shows page name', () => {
      const { container } = render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>,
      );

      expect(container).toHaveTextContent('Home');
    });
  });

  // context('with URL included /AboutPage', () => {
  //   it('shows page name', () => {

  //   });
  // });

  // context('with URL included /RestaurantsPage', () => {
  //   it('shows page name', () => {

  //   });
  // });

  // context('with URL included /RestaurantPage', () => {
  //   it('shows page name', () => {

  //   });
  // });

  // context('with URL included /NotFoundPage', () => {
  //   it('shows page name', () => {

  //   });
  // });
});
