import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it('"About 페이지 입니다."라는 문구를 렌더한다', () => {
    const { container } = render(<AboutPage />);

    expect(container).toHaveTextContent('About 페이지 입니다.');
  });
});
