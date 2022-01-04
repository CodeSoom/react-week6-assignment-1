import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it('renders AboutPage', () => {
    const { getByText } = render(<AboutPage />);

    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('About 페이지 입니다.')).toBeInTheDocument();
  });
});
