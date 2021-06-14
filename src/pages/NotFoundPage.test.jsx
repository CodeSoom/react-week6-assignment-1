import { render } from '@testing-library/react';

import NotFound from './NotFoundPage';

describe('NotFound', () => {
  it('renders error message', () => {
    const { container } = render(<NotFound />);

    expect(container).toHaveTextContent('Not Found');
  });
});
