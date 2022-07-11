import { render } from '@testing-library/react';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders HomePage', () => {
    const { getByText } = render(<HomePage />);

    expect(getByText('Home')).not.toBeNull();
  });
});
