import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import given from 'given2';

import Restaurant from './Restaurant';

import RESTAURANT from '../fixtures/restaurant';

describe('Restaurant', () => {
  const renderComponent = () => render(
    <MemoryRouter>
      <Restaurant restaurant={given.restaurant} />
    </MemoryRouter>,
  );

  context('with restaurant', () => {
    given('restaurant', () => RESTAURANT);

    it('renders restaurant name, address, menus', () => {
      const { container } = renderComponent();

      expect(container).toHaveTextContent(RESTAURANT.name);
      expect(container).toHaveTextContent(RESTAURANT.address);
      RESTAURANT.menuItems.forEach(({ name }) => (
        expect(container).toHaveTextContent(name)
      ));
    });
  });

  context('without restaurant', () => {
    given('restaurant', () => null);

    it('noting render', () => {
      const { container } = renderComponent();

      expect(container).toHaveTextContent('레스토랑이 없습니다.');
    });
  });
});
