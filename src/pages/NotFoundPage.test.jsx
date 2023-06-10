import { render } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';

describe('AboutPage', () => {
  const renderNotFoundPage = () => render(<NotFoundPage />);
  it('about이 보인다', () => {
    const { container } = renderNotFoundPage();
    expect(container).toHaveTextContent('404Page');
  });
});
