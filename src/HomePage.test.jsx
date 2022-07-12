import { render } from '@testing-library/react';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders HomePage', () => {
    const { container } = render(<HomePage />);

    expect(container).toHaveTextContent('Home');
  });
});
