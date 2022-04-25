import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  function renderNotFoundPage() {
    return render((
      <MemoryRouter initialEntries={['/*']}>
        <NotFoundPage />
      </MemoryRouter>
    ));
  }

  it('renders the message of the NotFoundPage', () => {
    const { container } = renderNotFoundPage();

    expect(container).toHaveTextContent('404 Not Found');
  });
});
