import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import RestaurantDetailsPage from './RestaurantDetailsPage';

describe('RestaurantDetailsPage', () => {
  const renderDetailsPage = ({ name, address, menuItems }) => render((
    <MemoryRouter>
      <RestaurantDetailsPage
        restaurant={{ name, address, menuItems }}
      />
    </MemoryRouter>
  ));

  context('with restaurant detail', () => {
    it('renders restaurant details page', () => {
      const { container } = renderDetailsPage({ name: '양천 주가', address: '서울 강남구', menuItems: [{ id: 1, name: '밥' }] });

      expect(container).toHaveTextContent('양천 주가');
    });
  });

  context('without restaurant detail', () => {
    it('shows loading text', () => {
      const { container } = renderDetailsPage({ name: '', address: '', menuItems: [] });

      expect(container).toHaveTextContent('Loading...');
    });
  });
});
