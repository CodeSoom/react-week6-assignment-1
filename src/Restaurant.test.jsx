import { render } from '@testing-library/react';

import Restaurant from './Restaurant';

import RESTAURANT from '../fixtures/restaurant';

describe('Restaurant', () => {
  it('renders restaurant details', () => {
    const { container } = render(<Restaurant restaurant={RESTAURANT} />);

    expect(container).toHaveTextContent('밥');
  });
})
