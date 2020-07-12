import React from 'react';

import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('<AboutPage />', () => {
  it('shows page name', () => {
    const { container } = render(<AboutPage />);

    expect(container).toHaveTextContent('About');
  });

  it('shows page content', () => {
    const { container } = render(<AboutPage />);

    expect(container).toHaveTextContent('This is ....');
  });
});
