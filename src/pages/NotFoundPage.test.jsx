import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

describe('<NotFoundPage />', () => {
  const renderNotFoundPage = () => render(<NotFoundPage />);

  it('renders page not found', () => {
    const { container } = renderNotFoundPage();

    expect(container).toBeInTheDocument('404 Not Found');
  });
});
