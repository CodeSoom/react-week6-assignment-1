import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

test('HomePage', () => {
  const { container, getAllByRole } = render((
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  ));

  const targetPaths = ['about', 'restaurants'];

  const linkList = getAllByRole('link');

  expect(container).toHaveTextContent('Home');

  linkList.forEach((link, index) => {
    expect(link.href).toContain(targetPaths[index]);
  });
});
