import React from 'react';

import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

describe('<NotFoundPage />', () => {
  it('renders not found', () => {
    const { getByText } = render(<NotFoundPage />);

    expect(getByText(/404/)).toBeInTheDocument();
  });
});
