import React from 'react';

import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it('renders about page', () => {
    render(<AboutPage />);
  });
});
