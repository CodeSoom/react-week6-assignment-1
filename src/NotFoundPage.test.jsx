import { render } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('renders "404 Not Found"', () => {
    const { container } = render((
      <NotFoundPage />
    ));

    expect(container).toBeInTheDocument('404 Not Found');
  });
});
