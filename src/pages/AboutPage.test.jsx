import { render } from '@testing-library/react';
import AboutPage from './AboutPage';

describe('AboutPage', () => {
  const renderAboutPage = () => render(<AboutPage />);
  it('about이 보인다', () => {
    const { container } = renderAboutPage();
    expect(container).toHaveTextContent('About');
  });
});
