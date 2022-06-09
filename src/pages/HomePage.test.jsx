import { render } from '@testing-library/react';
import HomePage from './HomePage';

test('HomePage', () => {
  const { container } = render(<HomePage />);

  expect(container).toBeInTheDocument();
});
