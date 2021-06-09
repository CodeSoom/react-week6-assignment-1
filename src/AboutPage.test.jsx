import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

test('AboutPage', () => {
  const { getByText, queryByText } = render((
    <AboutPage />
  ));

  expect(queryByText('About')).not.toBeNull();
  expect(getByText('About')).toContainHTML('h2');

  expect(getByText('About 페이지 입니다.')).not.toBeNull();
});
