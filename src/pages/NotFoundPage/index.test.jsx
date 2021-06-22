import { render } from '@testing-library/react';

import NotFoundPage from '.';

describe('NotFoundPage', () => {
  it('renders "404 Not Found"', () => {
    const { getByRole } = render(<NotFoundPage />);

    expect(getByRole('heading', { name: '404 Not Found' })).toBeInTheDocument();
  });
});
