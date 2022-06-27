import { render } from '@testing-library/react';
import AboutPage from './AboutPage';

test('AboutPage', () => {
  const { getByRole } = render(<AboutPage />);

  expect(getByRole('heading')).toHaveTextContent(/about/i);
});
