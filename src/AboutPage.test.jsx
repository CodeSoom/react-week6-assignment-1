import React from 'react';

import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  const renderAboutPage = () => render((
    <AboutPage />
  ));

  it('shows text contents', () => {
    const { container } = renderAboutPage();

    expect(container).toHaveTextContent('About');
    expect(container).toHaveTextContent('맛집을 추천');
  });
});
