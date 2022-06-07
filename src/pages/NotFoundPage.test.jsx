import { render } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('Not Found 를 표시한다.', () => {
    const { queryByText } = render(<NotFoundPage />);

    expect(queryByText(/404 Not Found/)).not.toBeNull();
  });
});
