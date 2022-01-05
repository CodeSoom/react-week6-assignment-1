import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('renders not found page', () => {
    const { container } = render((
      <NotFoundPage />
    ));

    expect(container).toHaveTextContent('404 Not Found');
  });
});
