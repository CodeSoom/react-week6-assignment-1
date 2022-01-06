import { render } from '@testing-library/react';

import NotFoundPage from '.';

describe('NotFoundPage', () => {
  it('renders not found text', () => {
    const { getByText } = render(<NotFoundPage />);

    expect(getByText('Not Found')).toBeInTheDocument();
  });
});
