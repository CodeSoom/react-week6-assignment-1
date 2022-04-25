import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it('renders the about page', () => {
    render((
      <AboutPage />
    ));
  });
});
