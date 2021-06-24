import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('verifies contents', () => {
    const { getByText, queryByText } = render((
      <NotFoundPage />
    ));

    expect(queryByText('404 Not Found')).not.toBeNull();
    expect(getByText('404 Not Found')).toContainHTML('p');
  });
});
