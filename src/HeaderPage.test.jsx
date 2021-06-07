import React from 'react';

import { render } from '@testing-library/react';

import HeaderPage from './HeaderPage';

test('HeaderPage', () => {
  const { getByText } = render((
    <HeaderPage />
  ));

  expect(getByText('헤더')).not.toBeNull();
  expect(getByText('헤더')).toContainHTML('a');
  expect(getByText('헤더')).toHaveAttribute('href', '/home');
});
