import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

test('NotFoundPage', () => {
  const { getByRole } = render(<NotFoundPage />);

  expect(getByRole('heading')).toHaveTextContent('Not Found');
});
