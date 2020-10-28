import React from 'react';

import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  const renderAboutPage = () => render((
    <AboutPage />
  ));

  it('shows heading', () => {
    const { container } = renderAboutPage();

    expect(container).toHaveTextContent('About');
  });
});
