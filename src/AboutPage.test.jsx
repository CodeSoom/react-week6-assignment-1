import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  const renderAboutPage = () => render(<AboutPage />);

  it('renders the heading', () => {
    const { container } = renderAboutPage();

    expect(container).toHaveTextContent('About');
  });

  it('renders the description', () => {
    const { container } = renderAboutPage();

    expect(container).toHaveTextContent('About 페이지 입니다.');
  });
});
