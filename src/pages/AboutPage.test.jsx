import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  const renderAboutPage = () => render(
    <AboutPage />,
  );

  it('화면에 특정한 텍스트를 보여준다.', () => {
    const { container } = renderAboutPage();

    ['About', 'About 페이지 입니다.'].forEach((text) => {
      expect(container).toHaveTextContent(text);
    });
  });
});
