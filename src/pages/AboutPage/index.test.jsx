import { render } from '@testing-library/react';

import AboutPage from '.';

describe('AboutPage', () => {
  it('renders title and content', () => {
    const { getByRole, getByText } = render(<AboutPage />);

    expect(getByRole('heading', { name: 'About' })).toBeInTheDocument();
    expect(getByText('About 페이지입니다.')).toBeInTheDocument();
  });
});
