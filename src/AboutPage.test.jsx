import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  const renderComponent = (path) => render((
    <MemoryRouter initialEntries={[path]}>
      <AboutPage />
    </MemoryRouter>
  ));

  it('renders home page', () => {
    const { container } = renderComponent('/about');

    expect(container).toHaveTextContent('About');
    expect(container).toHaveTextContent('About 페이지 입니다.');
  });
});
