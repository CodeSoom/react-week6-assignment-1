import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

test('renders About', () => {
  const { queryByText } = render((<AboutPage />));

  expect(queryByText('About')).not.toBeNull();
  expect(queryByText('About 페이지 입니다.')).not.toBeNull();
});
