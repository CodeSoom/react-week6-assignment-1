import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import RestaurantDetailsPage from './RestaurantDetailsPage';

describe('RestaurantDetailsPage', () => {
  const renderDetailsPage = ({ name, address, menuItems }) => render((
    <MemoryRouter>
      <RestaurantDetailsPage
        name={name}
        address={address}
        menuItems={menuItems}
      />
    </MemoryRouter>
  ));

  context('with restaurant details', () => {
    it('renders restaurant details page', () => {
      const { container } = renderDetailsPage({ name: '양천 주가', address: '서울 강남구', menuItems: [{ id: 1, name: '밥' }] });

      expect(container).toHaveTextContent('양천 주가');
    });
  });

  context('without restaurant details', () => {
    it("renders 'Loading...'", () => {
      const { container } = renderDetailsPage({ name: '', address: '', menuItems: [] });

      expect(container).toHaveTextContent('Loading...');
    });
  });
});
