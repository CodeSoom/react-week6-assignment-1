import React from 'react';

import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it('renders about page', () => {
    const { queryByText } = render((<AboutPage />));

    expect(queryByText(/About 페이지 입니다./)).not.toBeNull();
  });
});
