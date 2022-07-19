import React from 'react';

import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('<AboutPage />', () => {
  it('About이라는 텍스트가 보임', () => {
    const { container } = render(<AboutPage />);

    expect(container).toHaveTextContent('About');
  });
});
