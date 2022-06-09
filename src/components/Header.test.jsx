import { fireEvent, render } from '@testing-library/react';

import Header from './Header';

test('Header', () => {
  const { getByRole } = render(<Header />);

  expect(getByRole('heading', { level: 1 })).toHaveTextContent('헤더');

  fireEvent.click(getByRole('heading', { level: 1 }));

  expect(getByRole('heading', { level: 2 })).toHaveTextContent('Home');
});
