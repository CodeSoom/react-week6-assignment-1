import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it('renders About', () => {
    const { container } = render((
      <AboutPage />
    ));

    expect(container).toHaveTextContent('About');
    expect(container).toHaveTextContent('About 페이지 입니다.');
  });
});
