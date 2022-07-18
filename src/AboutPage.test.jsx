import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it('About이 보여집니다.', () => {
    const { container } = render(<AboutPage />);

    expect(container).toHaveTextContent('About');
  });
});
