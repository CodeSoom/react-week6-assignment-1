import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import DetailPage from './DetailPage';

test('DetailPage', () => {
  render((
    <MemoryRouter>
      <DetailPage />
    </MemoryRouter>
  ));
});
