import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  context('with path /about', () => {
    it('render AboutPage', () => {
      const { container } = render(
        <MemoryRouter>
          <AboutPage />
        </MemoryRouter>,
      );
      expect(container).toHaveTextContent('About');
    });
  });
});
