import React from 'react';

import { render } from '@testing-library/react';

import Restaurant from './Restaurant';

import RESTAURANT from '../fixtures/restaurant';

describe('Restaurant', () => {
  it('renders restaurant name', () => {
    const { container } = render(<Restaurant restaurant={RESTAURANT} />);

    expect(container).toHaveTextContent(RESTAURANT.name);
  });

  it('renders restaurant address', () => {
    const { container } = render(<Restaurant restaurant={RESTAURANT} />);

    expect(container).toHaveTextContent(RESTAURANT.address);
  });

  it('renders menu items', () => {
    const { container } = render(<Restaurant restaurant={RESTAURANT} />);

    RESTAURANT.menuItems.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });
});
