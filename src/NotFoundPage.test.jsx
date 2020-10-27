import React from 'react';

import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('renders not found page', () => {
    render(<NotFoundPage />);
  });
});
