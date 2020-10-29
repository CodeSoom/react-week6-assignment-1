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
    const restaurant = {
      name: '양천 주가',
      address: '서울 강남구',
      menuItems: [{ id: 1, name: '밥' }],
    };

    it('renders restaurant details page', () => {
      const { container } = renderDetailsPage(restaurant);

      expect(container).toHaveTextContent('양천 주가');
    });
  });

  context('when empty restaurant detail', () => {
    const restaurant = {
      name: '',
      address: '',
      menuItems: [],
    };

    it('shows loading text', () => {
      const { container } = renderDetailsPage(restaurant);

      expect(container).toHaveTextContent('Loading...');
    });
  });
});
