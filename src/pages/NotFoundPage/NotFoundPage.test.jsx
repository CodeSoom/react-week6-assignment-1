import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  const renderNotFoundPage = () => render(<NotFoundPage />);

  it('renders the heading', () => {
    const { container } = renderNotFoundPage();

    expect(container).toHaveTextContent('Not Found');
  });
});
