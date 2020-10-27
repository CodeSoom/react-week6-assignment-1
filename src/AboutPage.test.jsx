import React from 'react';

import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it('renders about page', () => {
    const { getByText } = render(<AboutPage />);

    expect(getByText('About')).not.toBeNull();

    expect(getByText('About 페이지입니다.')).not.toBeNull();
  });
});
