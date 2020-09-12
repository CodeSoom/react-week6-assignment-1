import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import RestaurantsDetail from './RestaurantsDetail';

import RESTAURANT from '../fixtures/restaurant';

const renderRestaurantsDetail = () => render(
  <MemoryRouter>
    <RestaurantsDetail restaurant={RESTAURANT} />
  </MemoryRouter>,
);

describe('RestaurantsDetail', () => {
  it('레스토랑 상세 정보가 보인다.', () => {
    const { getByText } = renderRestaurantsDetail();

    expect(getByText(/양천주가/)).not.toBeNull();
    expect(getByText(/탕수육/)).not.toBeNull();
  });
});
