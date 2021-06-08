import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('verifies contents', () => {
    const { getByText } = render((
      <NotFoundPage />
    ));

    expect(getByText('404 Not Found')).not.toBeNull();
    expect(getByText('404 Not Found')).toContainHTML('p');
  });
});
