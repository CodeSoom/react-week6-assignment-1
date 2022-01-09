import { render } from '@testing-library/react';

import NotFoundPage from '.';

describe('NotFoundPage', () => {
  it('renders 404 Not Found text', () => {
    const { getByText } = render(<NotFoundPage />);

    expect(getByText('404 Not Found')).toBeInTheDocument();
  });
});
