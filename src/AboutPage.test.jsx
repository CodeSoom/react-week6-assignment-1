import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  function renderAboutPage() {
    return render((
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    ));
  }

  it('renders about page', () => {
    const { container } = renderAboutPage();

    expect(container).toHaveTextContent('About');
    expect(container).toHaveTextContent('About 페이지 입니다.');
  });
});
