import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

test('NotFoundPage', () => {
  const { getByRole } = render(<NotFoundPage />);

  expect(getByRole('heading')).toHaveTextContent('페이지를 찾을 수 없습니다');
});
