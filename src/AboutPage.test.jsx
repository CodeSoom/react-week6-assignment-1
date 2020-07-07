import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it('renders AboutPage', () => {
    const { getByText } = render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>,
    );

    expect(getByText('About 페이지 입니다')).not.toBeNull();
  });
});
