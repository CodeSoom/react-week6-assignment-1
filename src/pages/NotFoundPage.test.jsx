import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('renders NotFoundPage', () => {
    const { queryByText } = render(<NotFoundPage />);

    expect(queryByText('404 Not Found')).not.toBeNull();
  });
});
