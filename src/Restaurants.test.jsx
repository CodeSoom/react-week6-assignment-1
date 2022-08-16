import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Restaurants from './Restaurants';

import RESTAURANTS from '../fixtures/restaurants';

function customRender(restaurants) {
  return render(
    <MemoryRouter>
      <Restaurants restaurants={restaurants} />
    </MemoryRouter>,
  );
}

describe('Restaurant', () => {
  context('with restaurants', () => {
    it('renders restaurants', () => {
      const { queryByText } = customRender(RESTAURANTS);

      expect(queryByText('양천주가')).not.toBeNull();
      expect(queryByText('한국식 초밥')).not.toBeNull();
    });
  });

  context('without restaurant', () => {
    it('does not render restaurants', () => {
      const { queryByText } = customRender();

      expect(queryByText('양천주가')).toBeNull();
      expect(queryByText('한국식 초밥')).toBeNull();
    });
  });
});
