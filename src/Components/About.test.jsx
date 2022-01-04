import { render } from '@testing-library/react';

import About from './About';

test('renders About', () => {
  const { queryByText } = render(<About />);

  expect(queryByText('About')).not.toBeNull();
  expect(queryByText('About 페이지 입니다.')).not.toBeNull();
});
