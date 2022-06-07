import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it('"404 Not Found"라는 문구를 렌더한다', () => {
    const { container } = render(<AboutPage />);

    expect(container).toHaveTextContent('404 Not Found');
  });
});
