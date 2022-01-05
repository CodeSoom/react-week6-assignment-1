import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  const renderAboutPage = () => render(
    <MemoryRouter initialEntries={['/about']}>
      <AboutPage />
    </MemoryRouter>,
  );

  it('"About" 헤더 텍스트가 화면에 나타난다.', () => {
    const { container } = renderAboutPage();

    expect(container).toHaveTextContent('About');
  });

  it('"About 페이지 입니다." 화면에 나타난다.', () => {
    const { container } = renderAboutPage();

    expect(container).toHaveTextContent('About 페이지 입니다.');
  });
});
