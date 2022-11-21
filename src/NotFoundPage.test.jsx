import { render } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('NotFoundPage가 렌더링된다.', () => {
    const { getByText } = render((<NotFoundPage />));

    expect(getByText('404 Not Found')).not.toBeNull();
  });
});
