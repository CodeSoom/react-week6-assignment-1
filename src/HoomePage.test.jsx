import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import HomePage from './HomePage';

test('HomePage', () => {
  const { queryByText } = render((
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  ));

  expect(queryByText(/About/)).not.toBeNull();
});
