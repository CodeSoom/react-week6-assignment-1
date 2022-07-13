import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('<AboutPage />', () => {
  const renderAboutPage = () => render(<AboutPage />);

  it('renders page not found', () => {
    const { getByText } = renderAboutPage();

    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('About 페이지 입니다')).toBeInTheDocument();
  });
});
